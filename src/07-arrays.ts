(()=>{
  let prices = [1,2,2,1,1,212]
  console.log('prices',prices)
  //Solo se pueden agregar valores del mismo tipo del array original
  prices.push(12345);

  let products = ['hola',true]
  products.push(false);

  let mixed : (number | string | boolean | object)[] = ['hola',true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers  = [1,2,3,4,5,6,7,8,9,0,2134];
  numbers.map(item => item * 2);
  console.log(numbers,'numbers')
})()
