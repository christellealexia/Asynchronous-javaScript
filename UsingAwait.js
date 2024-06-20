const p = new Promise((resolve) => {
    resolve('Wegoo');
  });
  
  async function getData(){
    let val = await p;
    console.log(val);
  }
  getData();
  