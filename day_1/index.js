const fs = require('fs')

const text = fs.readFileSync(process.stdin.fd, 'utf-8').trim()
const textAr = text.split("")
const opAr = textAr.map((a) => ((a == "(") ? 1 : -1))

function walk() {
	let state = 0
	return function (vec) {
		state += vec
		return state
	}
}

const walkedAtEnd = opAr.map(walk())
const part1 = walkedAtEnd[walkedAtEnd.length - 1]

console.log("Part 1: ", part1)

function sweepLevelFromWalkedAtEnd(level) {
	return function(acc, cur, index, ar) {
		if (acc >= 0) return acc
		if (cur == level){
			return index
		}
		return -1
	}
}


const part2 = walkedAtEnd.reduce(sweepLevelFromWalkedAtEnd(-1), -1) + 1
console.log("Part 2: ", part2) 
