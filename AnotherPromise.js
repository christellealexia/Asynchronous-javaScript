function job(seconds) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(seconds < 2 ){
                reject('Byee')
            }
            else
resolve('hello world');
        },2000)
    
    // return 'hello world';
    });
}
    job(5).then((message) =>{
    console.log('Hello world');
})
job(5).catch((message) => {
    console.log('error');
});


module.exports = job;
    
