(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL'

  function createProductToJsonV2(
    title: string,
    createdAt: Date,
    stock:number,
    size: Sizes
  ){
    return{
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJsonV2('P1',new Date(),12,'XL')
  console.log(producto1)

  const createProductToJson = (
    title: string,
    createdAt: Date,
    stock:number,
    size?: Sizes
  ) => {
    return{
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto2 = createProductToJson('P2',new Date(),15)
  console.log(producto2)
})();
