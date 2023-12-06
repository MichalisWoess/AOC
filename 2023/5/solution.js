// AOC 2023 - Day 5
const fs = require('fs')
const Parallel = require('paralleljs')

// Reading and parsing input
const input = fs.readFileSync('./input.txt').toString()
const lines = input.split('\n')

// Extracting seeds
const seeds = lines[0].split('seeds: ')[1].split(' ').map(Number)

let locMin = Infinity

const mapTypes = new Map([
    ['seed-to-soil', new Map()],
    ['soil-to-fertilizer', new Map()],
    ['fertilizer-to-water', new Map()],
    ['water-to-light', new Map()],
    ['light-to-temperature', new Map()],
    ['temperature-to-humidity', new Map()],
    ['humidity-to-location', new Map()],
])

function createArray(from, length) {
    return Array.from({ length }, (_, index) => from + index)
}

async function processChunk(chunk) {
    console.log('Maptypes: ', mapTypes)
    const p = new Parallel(chunk, { env: { lines: lines, mapTypes: mapTypes } })
    p.require(mapValue)
    const results = await p.map(newFunction)
    results.forEach((r) => {
        if (r < locMin) locMin = r
    })
    return locMin
}

async function processSeeds() {
    for (let i = 0; i < seeds.length; i += 2) {
        const start = seeds[i]
        const length = seeds[i + 1]
        const arr = createArray(start, length)

        for (let j = 0; j < arr.length; j += 100000000) {
            const chunk = arr.slice(j, j + 100000000)
            locMin = await processChunk(chunk)
        }
    }
    console.log(locMin)
}

function newFunction(seed) {
    let result = seed

    const mapTypes = global.env.mapTypes
    mapTypes.entries.forEach(([mt, v]) => {
        if (v.get(result) !== undefined) return v.get(result)[1]
        else {
            const oldResult = result
            result = mapValue(result, mt)
            v.set(oldResult, result)
        }
    })

    return result
}

function mapValue(value, mapType) {
    let result = value
    const lines = global.env.lines

    lines.forEach((line, i) => {
        if (line === `${mapType} map:`) {
            for (let j = i + 1; j < lines.length; j++) {
                const parts = lines[j].split(' ')
                if (parts.length < 3) break

                const [start, base, rangeLength] = parts.map(Number)
                if (base <= value && value < base + rangeLength) {
                    result = start + (value - base)
                    break
                }
            }
        }
    })
    return result
}

processSeeds()
