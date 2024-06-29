// console.log('What day is it today?')
// function myCallback(){
//     console.log('Yess it is Friday')
// }
// setTimeout(myCallback,2000);

function myFunction(callback){
    setTimeout(() => {
        callback()
    },2000)
}
function today(){
    console.log('Today is Fridayyyy')
}
myFunction(today);
