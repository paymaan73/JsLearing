let names = ["Alex", "Maria", "Sam"]
console.log(names)
console.log(names[2])
console.log(names.length)
for (var n of names){
	console.log("X")
}

names.forEach(function(n, index) {
	console.log(n, index)
})


