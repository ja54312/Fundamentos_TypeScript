(()=>{
  //let myNumber:number;
  //let myString:string;
  let myNull:null = null;
  let myUndifined:undefined = undefined;

  let myNumber:number|null = null;
  let myString:string|undefined=undefined;

  function hi(name:string|null){
    let hello:string='hola ';
    if(name) {
      hello += name;
    }else{
      hello +='nobody';
    }
    console.log(hello);
  }

  function hiv2(name:string|null){
    let hello ='hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }
})();
