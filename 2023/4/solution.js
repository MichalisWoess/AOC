// AOC 2023 - Day 4

// #region Parsing
let input = require('fs').readFileSync('./input.txt').toString()

let lines = input.split('\n')
// #endregion

// #region Part 1
let sums = lines.map((l) => {
    let winning = l
        .split(':')[1]
        .split(' | ')[0]
        .split(' ')
        .map((s) => parseInt(s))
        .filter((x) => isNaN(x) === false)

    let mine = l
        .split(':')[1]
        .split(' | ')[1]
        .split(' ')
        .map((s) => parseInt(s))
        .filter((x) => isNaN(x) === false)

    let sum = 0
    winning.forEach((w) => {
        mine.forEach((m) => {
            if (w === m) {
                sum += 1
            }
        })
    })

    let prod = 0
    for (let i = 0; i < sum; i++) {
        if (i == 0) prod += 1
        else prod *= 2
    }

    return prod
})

let res = sums.reduce((a, b) => a + b, 0)
// #endregion

// #region Part 2
let instances = lines.map((l, i) => ({ i, matchingNumbers: 0, copies: 1 }))
lines.forEach((l, game) => {
    let winning = l
        .split(':')[1]
        .split(' | ')[0]
        .split(' ')
        .map((s) => parseInt(s))
        .filter((x) => isNaN(x) === false)

    let mine = l
        .split(':')[1]
        .split(' | ')[1]
        .split(' ')
        .map((s) => parseInt(s))
        .filter((x) => isNaN(x) === false)

    let matching = 0
    winning.forEach((w) => {
        mine.forEach((m) => {
            if (w === m) {
                matching += 1
            }
        })
    })

    for (let c = 0; c < instances[game].copies; c++) {
        for (let i = game + 1; i <= game + matching; i++) {
            instances[i].copies++
        }
    }
})

console.table(instances)

let totalCopies = instances.reduce((a, b) => a + b.copies, 0)

console.log(totalCopies)
// #endregion
