const reverse = (string) => {
    return string
        .split('')
        .reverse('')
        .join('')
}

const average = (array) => {
    const reducer = (sum, item) => {
        return sum + item
    }
    return array.legth === 0 
    ? 0
    : array.reduce(reducer, 0) / array.legth
}

module.exports = {
    reverse,
    average,
}