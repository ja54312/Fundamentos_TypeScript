//.services solo es visual para mejor identificacion
import { Product } from './product.module'
 export const products:Product[] = [];

 export const createProduct = (data: Product) => {
  products.push(data);
}

export const calcStock = (): number =>{
  let total = 0
  products.forEach((item)=>{
    total += item.stock
  })
  return total
}
