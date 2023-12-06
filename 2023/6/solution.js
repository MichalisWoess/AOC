// AOC 2023 - Day 6

// #region Parsing
let input = require('fs').readFileSync('./input.txt').toString()

let lines = input.split('\n')
// #endregion

// #region Part 1
let time = lines[0]
    .split('Time:')[1]
    .trim()
    .split(' ')
    .filter((x) => !isNaN(x))
    .join('')

let distance = lines[1]
    .split('Distance:')[1]
    .trim()
    .split(' ')
    .filter((x) => !isNaN(x))
    .join('')

let prod = 0
for (let i = 1; i < time; i++) {
    if (i * (time - i) > distance) {
        prod = time - i - i + 1
        console.log(time - i - i + 1)
        break
    }
}

console.log(prod)
// #endregion

// #region Part 2

// #endregion
