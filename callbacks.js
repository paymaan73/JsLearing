function callbackExample(name, callback){
  console.log(callback(name));
}


callbackExample("Paymaan kazemi", function(name){
  return "Hello " + name;
});

var callback = function(name){
  return "GoodBye " + name
}

callbackExample("Paymaan kazemi", callback)




var mapCallback = function(n){
  return n * 2;
}

var map = [1, 2, 3, 4].map(mapCallback);
console.log(map);
