import { GobCore } from "../gob"
import { type, userInfo } from "os"
import { getObjectValueByPath, normalizeKeyPath } from "../../object/object"
import isEqual from "lodash/isEqual"
import { IGobOperator } from "../executor/lib/operators"
import { isAsyncFunction } from "../../function/function"

export const enum GobFilterType {
    fin = "fin",
    pre = "pre"
}

export enum IGobFilterRecursiveType {
    all = "all",
    once = "once"
}

export interface IGobFilter {
    // 过滤器类型（fin、pre）
    type: GobFilterType
    // 过滤器名称
    name: string
    // 过滤器匹配的键名路径
    keyPath: string[]
    // 过滤器是否进行键名路径的递归匹配
    recursive?: IGobFilterRecursiveType | boolean
    // 是否是异步过滤器
    async?: boolean
    // 过滤器函数
    func: (newValue: any, operator: IGobOperator, info: GobFilterProvideInfo) => any
}

// todo: 待有时间，优化过滤器查找的性能

export class GobFilters {
    private gobCore: GobCore
    // 终过滤器列表
    finFilters: IGobFilter[] = []
    // 预过滤器列表
    preFilters: IGobFilter[] = []

    // 查找树
    private findTree: any = {}

    constructor(gobCore: GobCore) {
        this.gobCore = gobCore
    }

    /**
     * 添加过滤器
     * @param filter
     */
    addFilter(filter: IGobFilter): IGobFilter {
        switch (filter.type) {
            case GobFilterType.fin: {
                this.finFilters.push(filter)
                break
            }

            case GobFilterType.pre: {
                this.preFilters.push(filter)
                break
            }
        }

        return filter
    }

    /**
     * 添加前过滤器
     * @param keyPath
     * @param func
     * @param name
     * @param [recursive]
     * @param [isAsyncFilter]
     * @param [type]
     */
    addPreFilter(
        keyPath: string | string[],
        func: (newValue: any, operator: IGobOperator, info: GobFilterProvideInfo) => any,
        name: string = "",
        recursive = false,
        isAsyncFilter?: boolean,
        type = GobFilterType.pre
    ) {
        keyPath = normalizeKeyPath(keyPath)

        let isAsync = isAsyncFilter === undefined ? isAsyncFunction(func) : isAsyncFilter

        let filter: IGobFilter = {
            // 过滤器类型（fin、pre）
            type: type,
            // 过滤器名称
            name: name,
            // 过滤器匹配的键名路径
            keyPath: keyPath,
            // 过滤器是否进行键名路径的递归匹配
            recursive: recursive,
            // 是否是异步过滤器
            async: isAsync,
            // 过滤器函数
            func: func
        }

        return this.addFilter(filter)
    }

    /**
     * 添加终过滤器
     * @param keyPath
     * @param func
     * @param name
     * @param [recursive]
     * @param [isAsyncFilter]

     */
    addFinFilter(
        keyPath: string | string[],
        func: (newValue: any, operator: IGobOperator, info: GobFilterProvideInfo) => any,
        name = "",
        recursive = false,
        isAsyncFilter?: boolean,
    ) {
        return this.addPreFilter(keyPath, func, name, recursive, isAsyncFilter, GobFilterType.fin)
    }

    /**
     * 根据 KeyPath 找到匹配的 filter
     * @param keyPath 要找的键名路径
     * @param type 过滤器类型 fin pre
     * @param recursive 递归匹配 比如 ["a","b","c"] 可以匹配到 ["a"]、 ["a","b"]、["a","b","c"]
     */
    findFilter(type: GobFilterType, keyPath: string[]): IGobFilter[] {
        let pool: IGobFilter[]

        switch (type) {
            case GobFilterType.fin: {
                pool = this.finFilters
                break
            }
            case GobFilterType.pre: {
                pool = this.preFilters
                break
            }
            default: {
                throw Error("[Gob] findFilter() type err.")
            }
        }

        let re = pool.filter(item => {
            if (item.recursive) {
                // console.log("[find filter]", item, {
                //     a: keyPath.slice(0, item.keyPath.length),
                //     b: item.keyPath
                // })

                if (item.recursive === IGobFilterRecursiveType.once) {
                    return (
                        item.keyPath.length + 1 === keyPath.length &&
                        isEqual(keyPath.slice(0, item.keyPath.length), item.keyPath)
                    )
                } else {
                    return isEqual(keyPath.slice(0, item.keyPath.length), item.keyPath)
                }
            } else {
                return isEqual(keyPath, item.keyPath)
            }
        })

        return re
    }

    // 执行过滤器
    private execFilter(filter: IGobFilter, operator: IGobOperator, info: any): boolean | undefined {
        try {
            return filter.func(operator.value, operator, info)
        } catch (e) {
            console.error("[Gob] execFilter err", e)
        }
    }

    private createFilterProvideInfo(filters: IGobFilter[], operator: IGobOperator): GobFilterProvideInfo {
        return new GobFilterProvideInfo(filters, operator, this.gobCore)
    }

    /**
     * 对一个操作符执行过滤器集
     * @param filterType
     * @param operator
     */
    runFilters(filterType: GobFilterType, operator: IGobOperator) {
        let filters = this.findFilter(filterType, operator.keyPath)
        let filterProvideInfo = this.createFilterProvideInfo(filters, operator)
        let needAsync = filters.some(filter => filter.async === true)

        // console.log("[runFilters]", filters, needAsync)
        if (needAsync) {
            let re = this.execFiltersAsync(filters, operator, filterProvideInfo)
            return { operator, async: re }
        } else {
            for (let i = 0; i < filters.length; i++) {
                filterProvideInfo.filterIndex = i
                let re = this.execFilter(filters[i], operator, filterProvideInfo)
                if (re === false) return
            }

            return { operator }
        }
    }

    /**
     * 异步对一个操作符执行过滤器集
     * @param filterType
     * @param operator
     */
    async execFiltersAsync(
        filters: IGobFilter[],
        operator: IGobOperator,
        filterProvideInfo: GobFilterProvideInfo
    ): Promise<IGobOperator> {
        for (let i = 0; i < filters.length; i++) {
            let filter = filters[i]
            filterProvideInfo.filterIndex = i
            // 对异步过滤器执行 await
            if (filter.async) {
                await this.execFilter(filter, operator, filterProvideInfo)
            } else {
                this.execFilter(filter, operator, filterProvideInfo)
            }
        }
        return operator
    }
}

/**
 * 过滤器执行时信息对象
 */
export class GobFilterProvideInfo {
    gobCore: GobCore
    session: any = {}
    filters: IGobFilter[]
    filterIndex = 0
    private operator: IGobOperator
    constructor(filters: IGobFilter[], operator: IGobOperator, gobCore: GobCore) {
        this.gobCore = gobCore
        this.filters = filters
        this.operator = operator
    }
    get oldValue() {
        // console.log("[oldValue]", this.gobCore.data, this.operator.keyPath)
        return getObjectValueByPath(this.gobCore.data, this.operator.keyPath)
    }
}
