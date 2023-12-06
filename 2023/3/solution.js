// AOC 2023 - Day 3

// #region Parsing
let input = require('fs').readFileSync('./input.txt').toString()

let lines = input.split('\n')

// #endregion

// #region Part 1
String.prototype.replaceAt = function (index, replacement) {
    return (
        this.substring(0, index) +
        replacement +
        this.substring(index + replacement.length)
    )
}

// let sum = 0

// for (let i = 0; i < lines.length; i++) {
//     let line = lines[i]
//     let aggr = ''
//     console.log('-------------')
//     for (let j = 0; j < line.length; j++) {
//         let ch = line[j]
//         let num = Number(aggr)
//         console.log('\n\nCharacter: ', ch)
//         console.log('aggr: ', aggr)
//         console.log('Parsed: ', Number(ch))
//         console.log('is ch number?: ', !isNaN(Number(ch)))
//         if (isNaN(Number(ch))) {
//             if (ch !== '.') {
//                 console.log('adding ', num)
//                 sum += num
//                 console.log('line before: ', line)
//                 console.log(
//                     'line after: ',
//                     line.replaceAt(j - aggr.length, '.'.repeat(aggr.length))
//                 )
//                 line = line.replaceAt(j - aggr.length, '.'.repeat(aggr.length))
//                 aggr = ''
//             } else {
//                 if (j - aggr.length - 1 >= 0) {
//                     if (line[j - aggr.length - 1] !== '.') {
//                         console.log('adding ', num)
//                         sum += num
//                         console.log('line before: ', line)
//                         console.log(
//                             'line after: ',
//                             line.replaceAt(
//                                 j - aggr.length,
//                                 '.'.repeat(aggr.length)
//                             )
//                         )

//                         line = line.replaceAt(
//                             j - aggr.length,
//                             '.'.repeat(aggr.length)
//                         )
//                         aggr = ''
//                     }
//                 }
//                 console.log('were on a dot')
//                 if (aggr !== '')
//                     for (
//                         let k =
//                             j - aggr.length - 1 >= 0
//                                 ? j - aggr.length - 1
//                                 : j - aggr.length;
//                         k <= j;
//                         k++
//                     ) {
//                         if (i === lines.length - 1) {
//                             console.log('breaking')
//                             break
//                         }
//                         let c = lines[i + 1][k]
//                         console.log(
//                             'under character: ' + c + ' index: ',
//                             +(i + 1) + ' ' + k
//                         )
//                         console.log('k', k)
//                         if (c !== '.' && isNaN(Number(c))) {
//                             console.log('adding ', num)
//                             sum += num

//                             console.log(line)
//                             console.log(
//                                 line.replaceAt(
//                                     j - aggr.length,
//                                     '.'.repeat(aggr.length)
//                                 )
//                             )
//                             line = line.replaceAt(
//                                 j - aggr.length,
//                                 '.'.repeat(aggr.length)
//                             )
//                             aggr = ''
//                             break
//                         }
//                     }
//                 if (aggr !== '') {
//                     for (
//                         let k =
//                             j - aggr.length - 1 >= 0
//                                 ? j - aggr.length - 1
//                                 : j - aggr.length;
//                         k <= j;
//                         k++
//                     ) {
//                         if (i === 0) {
//                             console.log('breaking')
//                             break
//                         }
//                         let c = lines[i - 1][k]
//                         console.log(
//                             'over character: ' + c + ' index: ',
//                             +(i - 1) + ' ' + k
//                         )
//                         console.log('k', k)
//                         if (c !== '.' && isNaN(Number(c))) {
//                             console.log('adding ', num)
//                             sum += num

//                             console.log(line)
//                             console.log(
//                                 line.replaceAt(
//                                     j - aggr.length,
//                                     '.'.repeat(aggr.length)
//                                 )
//                             )
//                             line = line.replaceAt(
//                                 j - aggr.length,
//                                 '.'.repeat(aggr.length)
//                             )
//                             aggr = ''
//                             break
//                         }
//                     }
//                 }
//                 aggr = ''
//             }
//         } else {
//             aggr = aggr.concat(ch)
//             console.log('aggr now: ', aggr)
//             let num = Number(aggr)

//             if (j === line.length - 1) {
//                 if (j - aggr.length - 1 >= 0) {
//                     if (line[j - aggr.length - 1] !== '.') {
//                         console.log('adding ', num)
//                         sum += num
//                         console.log('line before: ', line)
//                         console.log(
//                             'line after: ',
//                             line.replaceAt(
//                                 j - aggr.length,
//                                 '.'.repeat(aggr.length)
//                             )
//                         )

//                         line = line.replaceAt(
//                             j - aggr.length,
//                             '.'.repeat(aggr.length)
//                         )
//                         aggr = ''
//                     }
//                 }
//                 console.log('were on a dot')
//                 if (aggr !== '')
//                     for (
//                         let k =
//                             j - aggr.length - 1 >= 0
//                                 ? j - aggr.length - 1
//                                 : j - aggr.length;
//                         k <= j;
//                         k++
//                     ) {
//                         if (i === lines.length - 1) {
//                             console.log('breaking')
//                             break
//                         }
//                         let c = lines[i + 1][k]
//                         console.log(
//                             'under character: ' + c + ' index: ',
//                             +(i + 1) + ' ' + k
//                         )
//                         console.log('k', k)
//                         if (c !== '.' && isNaN(Number(c))) {
//                             console.log('adding ', num)
//                             sum += num

//                             console.log(line)
//                             console.log(
//                                 line.replaceAt(
//                                     j - aggr.length,
//                                     '.'.repeat(aggr.length)
//                                 )
//                             )
//                             line = line.replaceAt(
//                                 j - aggr.length,
//                                 '.'.repeat(aggr.length)
//                             )
//                             aggr = ''
//                             break
//                         }
//                     }
//                 if (aggr !== '') {
//                     for (
//                         let k =
//                             j - aggr.length - 1 >= 0
//                                 ? j - aggr.length - 1
//                                 : j - aggr.length;
//                         k <= j;
//                         k++
//                     ) {
//                         if (i === 0) {
//                             console.log('breaking')
//                             break
//                         }
//                         let c = lines[i - 1][k]
//                         console.log(
//                             'over character: ' + c + ' index: ',
//                             +(i - 1) + ' ' + k
//                         )
//                         console.log('k', k)
//                         if (c !== '.' && isNaN(Number(c))) {
//                             console.log('adding ', num)
//                             sum += num

//                             console.log(line)
//                             console.log(
//                                 line.replaceAt(
//                                     j - aggr.length,
//                                     '.'.repeat(aggr.length)
//                                 )
//                             )
//                             line = line.replaceAt(
//                                 j - aggr.length,
//                                 '.'.repeat(aggr.length)
//                             )
//                             aggr = ''
//                             break
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

let sumbolRe = /[^.\d]/gm
let numberRe = /\d+/gm

let symbols = []
let numbers = []

lines.map((line, i) => {
    let match

    while ((match = sumbolRe.exec(line)) !== null) {
        symbols.push({
            index: match.index,
            i,
        })
    }

    while ((match = numberRe.exec(line)) !== null) {
        numbers.push({
            start: match.index,
            end: numberRe.lastIndex,
            i,
        })
    }
})

// let sum = 0

// symbols.forEach(({ index, i }) => {
//     let vicinity = [index - 1, index, index + 1]

//     let vicinityNumbers = numbers.filter(
//         (num) =>
//             (num.i === i || num.i === i - 1 || num.i === i + 1) &&
//             (vicinity.includes(num.start) || vicinity.includes(num.end - 1))
//     )

//     vicinityNumbers.forEach((vn) => {
//         let parsed = Number(lines[vn.i].substring(vn.start, vn.end))
//         sum += isNaN(parsed) ? 0 : parsed

//         lines[vn.i] = lines[vn.i].replaceAt(
//             vn.start,
//             '.'.repeat(vn.end - vn.start)
//         )
//     })
// })

// console.log(sum)

// #endregion

// #region Part 2
let gearRe = /(\*)/gm
let gears = []
let res = 0
lines.map((line, i) => {
    let match

    while ((match = gearRe.exec(line)) !== null) {
        gears.push({
            index: match.index,
            i,
        })
    }
})

gears.forEach(({ index, i }) => {
    let vicinity = [index - 1, index, index + 1]

    let vicinityNumbers = numbers.filter(
        (num) =>
            (num.i === i || num.i === i - 1 || num.i === i + 1) &&
            (vicinity.includes(num.start) || vicinity.includes(num.end - 1))
    )

    if (vicinityNumbers.length === 2) {
        let gearRatio = 1
        vicinityNumbers.forEach((vn) => {
            let parsed = Number(lines[vn.i].substring(vn.start, vn.end))
            gearRatio *= isNaN(parsed) ? 0 : parsed

            lines[vn.i] = lines[vn.i].replaceAt(
                vn.start,
                '.'.repeat(vn.end - vn.start)
            )
        })

        res += gearRatio
    }
})

console.log(res)
// #endregion
