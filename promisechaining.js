
function todo(name){
    return new Promise ((resolve) =>{
    setTimeout(()=> {
      resolve(`This is me ${name}`);
    },2000)
      });
  }
  function tobe(city){
    return new Promise ((resolve) => { 
    setTimeout(() => {
      resolve(`Here you are in your ${city}`)
    },3000)
    });
  }
  let promise = todo('Christelle');
  
  promise
  .then(function(first) {
  console.log(`${first} I just arrived`);
  return tobe('Kigali');
  })
  .then (function(second) {
  console.log(`${second} we are proud`)
  });