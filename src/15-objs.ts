(()=>{
  const login = (data:{email:string,password:string}) =>{
    console.log(data.email,data.password);
  }

  login({
    email:'nico@nico.com',
    password:'holamundo'
  })

  type Sizes = 'S'| 'M' | 'L' | 'XL'
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?:Sizes
  }

  const products:Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title:'pro1',
    createdAt: new Date(1993,1,1),
    stock:12
  })
  addProduct({
    title:'pro2',
    createdAt: new Date(1993,1,1),
    stock:12,
    size:'M'
  })
  console.log(products,'productos')
})()
