(()=>{
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice',productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('customerAge',customerAge)

  let productInStock: number;
  productInStock = 3;
  console.log('producto sin stock',productInStock)
  if (productInStock > 10){
    console.log('es mayor a 10')
  }

  let discount = parseInt('123');
  console.log('descuento',discount)
  if(discount <= 200){
    console.log('apply')
  }else{
    console.log('not apply')
  }

  let hex = 0xfff;
  console.log('hex',hex)
  let bin = 0b1010;
  console.log('bin',bin)

  const myNumber:number = 10;


})();
