function createAlarm (name,seconds){
    return new Promise((resolve, reject)=>{
      if(seconds < 2){
      reject('Delay is not sufficient') 
      }
      else {
      
setTimeout (() => {
    resolve('wake up person')
},seconds * 1000)
      }
        
    })
};

createAlarm('John',1).then((message) => {
   console.log(message)
});
createAlarm('John',1).catch((error) => {
  console.error(error)
});



