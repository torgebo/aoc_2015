const fs = require('fs')

const text = fs.readFileSync(process.stdin.fd, 'utf-8').trim()
const lines = text.split("\n")
const dims = lines.map(l => l.split("x").map(s => parseInt(s)))
const faces = dims.map(dim => [dim[0] * dim[1], dim[0] * dim[2], dim[1] * dim[2]])

const paperForEachPackage = faces.map(
	face => (
		2 * face.reduce((a, b) => a + b) +
		face.reduce((min, cur) => (min > cur) ? cur : min)
	)
)

const part1 = paperForEachPackage.reduce((a, b) => a + b)
console.log("Part 1: ", part1)


