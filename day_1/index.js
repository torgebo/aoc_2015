const fs = require('fs')

const text = fs.readFileSync(process.stdin.fd, 'utf-8').trim()
const textAr = text.split("")

const operator = function(label) {
	return (accumulator, currentValue) => {
		if (currentValue == label) return accumulator + 1
		return accumulator
	}
}

const up = operator('(')
const down = operator(')')

const upDown = (ar => ar.reduce(up, 0) - ar.reduce(down, 0))

console.log("Part 1: ", upDown(textAr))


const barrierOp = function() {
	return (accum, curVal, index, ar) => {
		//const {floor, foundPos} = accum
		const floor = accum[0]
		const foundPos = accum[1]
		if (floor == -1)  return accum;
		if ((floor == 0) && (curVal == ')')) return [-1, index];
		if (curVal == ')') return [floor - 1, -1];
		if (curVal == '(') return [floor + 1, -1];
	}
}

basementBreach = barrierOp()


const ans =  textAr.reduce(basementBreach, [0, -1])
const floor = ans[0]
const index = ans[1]
console.log("Part 2: ", floor)
console.log("Part 2: ", index + 1, floor)
