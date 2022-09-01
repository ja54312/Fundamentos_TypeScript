(()=>{
  let userId: string | number;
  userId=123;
  userId='soy un id'

  function greting ( mytext:number|string){
    if(typeof mytext === 'string'){
      console.log(`string ${mytext.toLocaleLowerCase()}`);
    }else{
      console.log(`number ${mytext.toFixed(1)}`);
    }
  }
  greting('hello');
  greting(12.323);
})();
