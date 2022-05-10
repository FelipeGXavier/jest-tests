const leftPad = require('../func/leftPad')

describe('leftPad tests', () => {
    test('empty str', () => {
        expect(leftPad('', 1, '-')).toBe('-')
        expect(leftPad('', 0, '-')).toBe('')
    })
    test('null str', () => {
        expect(leftPad(null, 1, null)).toBe(null)
    })
    test('str length equals or less than pad size', () => {
        expect(leftPad('ab', 2, '-')).toBe('ab')
        expect(leftPad('ab', 1, '-')).toBe('ab')
    })
    test('null empty strPad', () => {
        expect(leftPad('ab', 4, null)).toBe('  ab')
        expect(leftPad('ab', 4, '')).toBe('ab')
    })
    test('leftPad string', () => {
        expect(leftPad('abc', 4, 'abcd')).toBe('aabc')
        expect(leftPad('abc', 0, '-')).toBe('abc')
        expect(leftPad('ab', 2, '-')).toBe('ab')
        expect(leftPad('ab', 4, 'ad')).toBe('adab')
        expect(leftPad('ab', 5, 'ad')).toBe('aadab')
    })

})