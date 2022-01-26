const getRandomUsers = n => {
  const fetchRandomUsers = fetch(`https://randomuser.me/api`)
  fetchRandomUsers.then(data => {
    data.json().then(randomUsers => {
      console.log(JSON.stringify(randomUsers.results.length))
      randomUsers.results.forEach(user => {
        const {gender, email} = user
        console.log(`${gender} - ${email}`)
      })
    })
  })
  console.log(fetchRandomUsers)
}

getRandomUsers(10);
