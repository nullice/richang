/**
 * 把字节长度用为可读性强的单位表示
 * @param byteLength
 * @returns {string}
 * @example
 * getReadableFileSize(100)  // "100 B"
 * getReadableFileSize(1024) // "1.00 KB"
 * getReadableFileSize(4553) // "4.45 KB"
 * getReadableFileSize(2240000) // "2.14 MB"
 * getReadableFileSize(999888777660) // "931.22 GB"
 */
export function getReadableByteSize(byteLength) {
    const k = 1024;
    if (Math.abs(byteLength) < k) {
        return byteLength + " B";
    }
    let units = ["KB", "MB", "GB", "TB"];
    let u = -1;
    do {
        byteLength /= k;
        ++u;
    } while (Math.abs(byteLength) >= k && u < units.length - 1);
    return byteLength.toFixed(2) + " " + units[u];
}
//# sourceMappingURL=helpers.js.map