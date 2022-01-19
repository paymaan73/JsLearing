var persons = [
	{ name: "Alex", age: 22 },
	{ name: "Paymaan", age: "27" }
];

for (var i = 0; i < persons.length; i++){
	console.log(persons[i].name);
	console.log(persons[i].age);
	console.log('----------------------')
}

var number = 0
while(number < 5){
	console.log("While is running")
	number += 1
}

var i = 0;

do { 
	i ++;
	console.log(i)
} while (i < 5)
