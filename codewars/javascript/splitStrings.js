// Complete the solution so that it splits the string into pairs of two characters.If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore('_').

// Examples:
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

const solution = str => {
    const charArr = str.split('');
    const readyArr = []

    for (let i = 1; charArr.length > i; i += 2) {
        readyArr.push(charArr[i - 1] + charArr[i])
    }

    charArr.length % 2 ? readyArr.push(charArr[charArr.length - 1] + '_') : null

    return (readyArr)
}