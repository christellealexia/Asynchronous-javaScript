const p = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Wegoo');
    }, 10000);
  });
  async function getData(){
    let val = await p;
    console.log("it is amazing");
    console.log(val);
  }
  getData();
  
  
  
  