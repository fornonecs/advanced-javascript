// This is a callback, it can be anything...
function callback(i) {
	console.log(i)
}

console.log("Passing 1000ms (1sec) as the time.")
for (var i = 0; i < 3; i++) {
	setTimeout(() => callback(i), 1000)
}

for (let i = 0; i < 3; i++) {
	setTimeout(() => callback(i), 1000)
}

console.log("Passing Zero as the time.")
for (var i = 0; i < 3; i++) {
	setTimeout(() => callback(i), 0)
}

for (let i = 0; i < 3; i++) {
	setTimeout(() => callback(i), 0)
}

console.log("Understanding JS Stack.")

function a() {
	return console.log(b())
}
function b() {
	console.log("Called b()")
	return "you can call function a()"
}
a()

console.log("Var and Let")

for (var i = 0; i < 3; i++) {
	// Removed the callback to make it easier
}
console.log(i)
for (let i = 0; i < 3; i++) {
	// Removed the callback to make it easier
}
console.log(i)

for (var i = 0; i < 3; i++) {
	setTimeout(() => callback(i), 0)
}
// Let Block Scope
for (let i = 0; i < 3; i++) {
	setTimeout(() => callback(i), 0)
}

for (var i = 0; i < 3; i++) {
	;(function (i) {
		setTimeout(() => callback(i), 0)
	})(i)
}

// What happens if we move let out to the global scope ?
let z
for (z = 0; z < 3; z++) {
	setTimeout(() => callback(z), 0)
}
// 3 3 3
// We lose the block scope functionality and it behaves like var :(
