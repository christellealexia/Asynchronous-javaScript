
let promise1 = new Promise ((resolve) => {
    setTimeout(() => {
      resolve('It is Monday')
    },2000)
  });
  let promise2 = new Promise ((resolve) => {
    setTimeout(() => {
      resolve('It is Tuesday')
    },3000)
  });
  let promise3 = new Promise ((resolve) => {
    setTimeout(() => {
      resolve('It is Wednesday')
    },5000)
  });
  
  function getData(){
  
  Promise.all([promise1, promise2,promise3])
    .then((results) =>{ console.log(results)
      })
   .catch((error) => {
    console.log('One failed',error)
  })
  }
  getData();
  
  
  
  