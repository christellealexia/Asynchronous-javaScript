function job(data) {
    return new Promise ((resolve,reject) => {
        if(isNaN(data)){
            reject('error');
        }
        else if (data % 2 != 0) {
            setTimeout(() => {
                {
                    resolve('odd') 
                }
            
            },1000);
        }
            else if (data % 2 == 0){
                setTimeout(()=> {
reject('even')
                },2000)
            };
           
        
    })
    // return something;
}

module.exports = job;