const leftPad = (str, size, strPad) => {
    if (str === null) {
        return null
    }
    if (str.length >= size) {
        return str
    }
    if (strPad == null) {
        strPad = " "
    }
    let result = str
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