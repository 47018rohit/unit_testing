const analyzeArray = (array) => {
    let object = {
        average: array.reduce((x, y) => {
            return x + y;
        }, 0) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
    return object;

}

module.exports = analyzeArray;