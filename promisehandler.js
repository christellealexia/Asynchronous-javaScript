const p = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Wegoo');
    }, 10000);
  });
  function getData(){
    p.then(res => console.log(res));
    console.log("it is amazing");
  }
  getData();