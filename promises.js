const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("no data back from the server, there was an error");
  }, 3000);

  setTimeout(() => {
    reject("no data back from the server, there was an error");
  }, 2000);
});


promis.then(response =>  {
  console.log(response)
}).catch(error => {
  console.log(error)
})
