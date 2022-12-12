const analyzeArray = require('./analyzeArray')

let arr = [1, 2, 3, 4]
test('analysing array', () => {
    expect(analyzeArray(arr)).toEqual({ average: 2.5,
    min :1 , max: 4, length: 4
    })
})