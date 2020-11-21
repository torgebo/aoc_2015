const fs = require('fs')

const text = fs.readFileSync(process.stdin.fd, 'utf-8').trim()
const lines = text.split("\n")
const dims = lines.map(l => l.split("x").map(s => parseInt(s)))
const facePairs = dims.map(dim => [[dim[0], dim[1]], [dim[0], dim[2]], [dim[1], dim[2]]])
const faces = facePairs.map(facePair => facePair.map(fp => fp[0] * fp[1]))

const paperForEachPackage = faces.map(
	face => (
		2 * face.reduce((a, b) => a + b) +
		face.reduce((min, cur) => (min > cur) ? cur : min)
	)
)

const part1 = paperForEachPackage.reduce((a, b) => a + b)
console.log("Part 1: ", part1)

const minFacePerim = facePairs.map(facepair => Math.min(...facepair.map(fp => 2 * (fp[0] + fp[1]))))


const vol = dims.map(d => d[0] * d[1] * d[2])

const part2 = minFacePerim.map((perim, ind) => perim + vol[ind]).reduce(
	(a, b) => a + b)
console.log("Part 2: ", part2)
