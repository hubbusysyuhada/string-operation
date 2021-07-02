module.exports = class {
    static ngram (n, string) {
        let result = []
        for (let i = 0; i < string.length; i++) {
            if (string[i + n - 1]) {
                const temp = string.substring(i, i + n)
                result.push(temp)
            }
        }
        return result
    }

    static palindrome (string) {
        let result = ''
        for (let i = string.length - 1; i >= 0; i--) {
            result += string[i]
        }
        if (result === string) return true
        return false
    }

    static anagram (first_string, second_string) {
        let splittedFirstString = JSON.stringify(first_string.split('').sort())
        let splittedSecondString = JSON.stringify(second_string.split('').sort())
        return splittedFirstString === splittedSecondString
    }

    static marsupial (string, marsupial) {
        let splittedString = string.split('')
        let result = ''
        for (let i = 0; i < marsupial.length; i++) {
            for (let j = 0; j < splittedString.length; j++) {
                if (marsupial[i].toLowerCase() === splittedString[j]?.toLowerCase()) {
                    result += marsupial[i]
                    delete splittedString[j]
                    break
                }
            }
        }
        return result.toLowerCase() === marsupial.toLowerCase()
    }
}