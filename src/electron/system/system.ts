import electron from "electron"

/**
 * 获取系统目录
 * {
 *      home,
 *      appData,
 *      userData,
 *      temp,
 *      desktop,
 *      documents,
 *      downloads
 * }
 */
export function getSyetemPath() {
    let home = electron.remote.app.getPath("home")
    let appData = electron.remote.app.getPath("appData")
    let userData = electron.remote.app.getPath("userData")
    let temp = electron.remote.app.getPath("temp")
    let desktop = electron.remote.app.getPath("desktop")
    let documents = electron.remote.app.getPath("documents")
    let downloads = electron.remote.app.getPath("downloads")

    return {
        /**
         * 系统用户目录
         * @example /Users/nullice
         */
        home,
        /**
         * 应用数据目录。所有应用的目录，通常是 userData 的父级
         * @example /Users/nullice/Library/Application Support
         */
        appData,
        /**
         * 用户数据目录。当前应用的目录
         * @example /Users/nullice/Library/Application Support/lanhu-dsm-desktop
         */
        userData,

        /**
         * 系统临时目录
         * @example /var/folders/sm/dkgc1rmd40969l4207g8h1fh0000gn/T/
         */
        temp,

        /**
         * 用户桌面目录
         * @example /Users/nullice/Desktop
         */
        desktop,

        /**
         * 用户文档目录
         * @example /Users/nullice/Documents
         */
        documents,

        /**
         * 用户下载目录
         * @example /Users/nullice/Downloads
         */
        downloads
    }
}

/**
 * 使用系统默认设置打开 URL
 * @param url
 */
export async function openUrl(url: string) {
    return await electron.shell.openExternal(url)
}

/**
 * 使用系统设置打开一个文件
 */
export function openFile(path: string) {
    return electron.shell.openItem(path)
}

/**
 * 使用系统文件管理器打开文件所在文件夹，并选中它
 */
export function showFileInFolder(path: string) {
    return electron.shell.showItemInFolder(path)
}

/**
 * 播放系统声音 beep
 */
export function beep() {
    return electron.shell.beep()
}

/**
 * 把文件删除到回收站
 * @param path
 */
export function moveFileToTrash(path: string) {
    return electron.shell.moveItemToTrash(path)
}
