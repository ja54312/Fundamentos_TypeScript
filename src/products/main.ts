import {createProduct,calcStock,products} from './product.services'

createProduct({
  name:'pro1',
  createdAt: new Date(1993,1,1),
  stock:5
})
createProduct({
  name:'pro2',
  createdAt: new Date(1993,2,1),
  stock:6,
  size:'M'
})
console.log(products,'productos')
const total = calcStock();
console.log(total,'total productos')
