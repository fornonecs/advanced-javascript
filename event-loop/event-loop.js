// This is a callback, it can be anything... 
function callback(i) {
    console.log(i)
}

console.log("Passing 1000ms (1sec) as the time.")
for (var i = 0; i < 3; i++) {
    setTimeout(() => callback(i), 1000);
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => callback(i), 1000);
}

console.log("Passing Zero as the time.")
for (var i = 0; i < 3; i++) {
    setTimeout(() => callback(i), 0);
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => callback(i), 0);
}
