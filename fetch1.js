fetch('https://jsonplaceholder.typicode.com/users/1')
.then (response => {
  console.log(response)
})
.catch(error => {
 console.log(error) 
});