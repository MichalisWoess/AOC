// AOC 2023 - Day 2

// #region Parsing
let input = require('fs').readFileSync('./input.txt').toString()

let lines = input.split('\n')
lines = lines.map((line) => {
    return line.split(':')[1].trim()
})

// #endregion

// #region Part 1
let sum = 0
let colorMaxes = [
    {
        color: 'red',
        max: 12,
    },
    {
        color: 'green',
        max: 13,
    },
    {
        color: 'blue',
        max: 14,
    },
]
let part1 = lines.map((line, i) => {
    let sets = line.split(';').map((set) => {
        return set.trim()
    })

    let valid = true
    sets.forEach((set) => {
        let colors = set.split(', ')

        colors.forEach((color) => {
            colorMaxes.forEach((colorMax) => {
                if (color.split(colorMax.color).length > 1) {
                    if (
                        Number(color.split(` ${colorMax.color}`)[0]) >
                        colorMax.max
                    ) {
                        valid = false
                    }
                }
            })
        })
    })

    if (valid) {
        sum += i + 1
    }
})

console.log('Part 1 Solution: ', sum)
// #endregion

// #region Part 2
sum = 0
let colors = ['red', 'green', 'blue']
let part2 = lines
    .map((line, i) => {
        let sets = line.split('; ').map((set) => {
            return set.trim()
        })

        let colorCounts = sets
            .map((set) => {
                return set.split(', ').map((countAndColor) => {
                    return colors
                        .map((color) => {
                            if (countAndColor.split(color).length > 1) {
                                return {
                                    color,
                                    count: Number(
                                        countAndColor.split(color)[0].trim()
                                    ),
                                }
                            }
                        })
                        .filter((colorTally) => {
                            return colorTally !== undefined
                        })[0]
                })
            })
            .flat()

        let redMax = -Infinity
        let blueMax = -Infinity
        let greenMax = -Infinity
        colorCounts.forEach((x) => {
            if (x.color === 'red') {
                redMax = Math.max(redMax, x.count)
            } else if (x.color === 'blue') {
                blueMax = Math.max(blueMax, x.count)
            } else if (x.color === 'green') {
                greenMax = Math.max(greenMax, x.count)
            }
        })

        return redMax * blueMax * greenMax
    })
    .reduce((a, b) => {
        return a + b
    })

console.log('Part 2 Solution: ' + part2)
// #endregion
