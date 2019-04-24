/**
 * 点击一个元素
 * @param node
 */
export function clickElement(node) {
    try {
        node.dispatchEvent(new MouseEvent("click"));
    }
    catch (e) {
        let event = document.createEvent("MouseEvents");
        event.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
        node.dispatchEvent(event);
    }
}
//# sourceMappingURL=dom.js.map