var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Runner } from "../../src/async/lib/Runner";
import { sleep } from "../../src/async/async";
import { stopwatch } from "../../src/time/time";
import { inRange } from "../../src/number/number";
describe("Runner 流程", () => __awaiter(this, void 0, void 0, function* () {
    let newTasks = () => {
        return [
            {
                func: sleep,
                args: [50]
            },
            {
                func: sleep,
                args: [50]
            },
            {
                func: sleep,
                args: [100]
            },
            {
                func: sleep,
                args: [200]
            }
        ];
    };
    test("耗时估计( track 1)", () => __awaiter(this, void 0, void 0, function* () {
        let tasks = newTasks();
        let st = stopwatch();
        let runner = new Runner(tasks, 1);
        yield runner.run();
        let t = st();
        expect(inRange(t, [350, 700])).toBeTruthy();
    }));
    test("耗时估计( track 2)", () => __awaiter(this, void 0, void 0, function* () {
        let tasks = newTasks();
        let st = stopwatch();
        let runner = new Runner(tasks, 2);
        yield runner.run();
        let t = st();
        expect(inRange(t, [250, 500])).toBeTruthy();
    }));
}));
describe("Runner 执行任务", () => __awaiter(this, void 0, void 0, function* () {
    let newTestKit = () => {
        let log = [];
        let tasks = [
            () => __awaiter(this, void 0, void 0, function* () {
                yield sleep(50);
                log.push(0);
            }),
            () => __awaiter(this, void 0, void 0, function* () {
                yield sleep(50);
                log.push(1);
            }),
            () => __awaiter(this, void 0, void 0, function* () {
                yield sleep(100);
                log.push(2);
            }),
            () => __awaiter(this, void 0, void 0, function* () {
                yield sleep(200);
                log.push(3);
            })
        ];
        return { log, tasks };
    };
    test("确定顺序 ( track 1)", () => __awaiter(this, void 0, void 0, function* () {
        let { tasks, log } = newTestKit();
        let runner = new Runner(tasks, 3);
        yield runner.run();
        expect(runner.isRunning).toBeFalsy();
        expect(runner.running.length).toBe(0);
        expect(runner.failed.length).toBe(0);
        expect(runner.success.length).toBe(4);
        expect(runner.taskPool.length).toBe(0);
        expect(log).toEqual([0, 1, 2, 3]);
    }));
    test("超时", () => __awaiter(this, void 0, void 0, function* () {
        let { tasks, log } = newTestKit();
        let runner = new Runner(tasks, 3, { timeout: 60 });
        let st = stopwatch();
        yield runner.run();
        let t = st();
        expect(runner.isRunning).toBeFalsy();
        expect(runner.running.length).toBe(0);
        expect(runner.failed.length).toBe(2);
        expect(runner.success.length).toBe(2);
        expect(runner.taskPool.length).toBe(0);
        expect(inRange(t, [80, 160])).toBeTruthy();
    }));
    test("暂停", () => __awaiter(this, void 0, void 0, function* () {
        let { tasks, log } = newTestKit();
        let runner = new Runner(tasks, 3);
        // 当 2 个任务时暂停
        runner.onTaskFinal((task, runner) => {
            if (runner.finally.length == 2) {
                runner.pause();
            }
        });
        runner.run();
        yield sleep(200);
        expect(runner.isRunning).toBeFalsy();
        expect(runner.isPause).toBeTruthy();
        expect(runner.success.length).toBe(2);
        runner.resume();
        yield sleep(200);
        expect(runner.isRunning).toBeFalsy();
        expect(runner.isPause).toBeFalsy();
        expect(runner.success.length).toBe(4);
    }));
    test("进度", () => __awaiter(this, void 0, void 0, function* () {
        let { tasks, log } = newTestKit();
        let runner = new Runner(tasks, 3);
        let pLog = [];
        // 当 2 个任务时暂停
        runner.onProgress((precent, info, runner) => {
            pLog.push({ precent, info });
        });
        runner.run();
        yield sleep(300);
        expect(pLog.length).toBe(4);
        expect(pLog).toEqual([
            { precent: 25, info: { current: 1, max: 4 } },
            { precent: 50, info: { current: 2, max: 4 } },
            { precent: 75, info: { current: 3, max: 4 } },
            { precent: 100, info: { current: 4, max: 4 } }
        ]);
    }));
}));
//# sourceMappingURL=Runner.test.js.map