(()=>{
  const calcTotal = (prices:number[]):number =>{
    let total = 0;
    prices.forEach((item)=>{
      total += item
    })
    return total;
  }
//void para especificar el tipado de cuando no se regresa ningun valor
  const printTotal = (prices:number[]) =>{
    const rta = calcTotal(prices)
    console.log(`El total es ${rta}`)
  }

  printTotal([1,5,6,4,8,7])
})()
