var person = {
	name: 'Anna', 
	age: 16
}

switch(person.age){
	case (person.age == 17):
		console.log(person.name + " is about to be an adult");
		break;
	case (person.age >= 18):
		console.log(person.name + " is an adult");
		break;
	default:
		console.log(person.name + "we dont know")
}


switch (new Date().getDay()){
	case 6:
		console.log("Saturday")
		break;
	default:
		console.log("I dont know")
}

