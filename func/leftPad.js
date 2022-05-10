const leftPad = (str, size, strPad) => {
    let result = str
    if (str === null) {
        return null
    }
    if (strPad == null) {
        strPad = " "
    }
    const pads = size - str.length
    if (pads <= 0) {
        return str
    }
    for (let i = 0; i < pads; i++) {
        if (result.length + strPad.length > size) {
            const diff = size - result.length
            result = strPad.substring(0, diff) + result
        } else {
            result = strPad + result
        }
    }
    return result
}

module.exports = leftPad