(()=>{
  //Se aconseja no utilizar any
  let myDynamicvar: any;
  myDynamicvar=100;
  myDynamicvar={};
  myDynamicvar=[];
  myDynamicvar='';

  myDynamicvar='hello';
  const rta = (myDynamicvar as string).toLowerCase();

  myDynamicvar=12312;
  const rta2 = (<number>myDynamicvar).toFixed();
  console.log(rta2);
})();
