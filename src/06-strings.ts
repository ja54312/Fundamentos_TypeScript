(()=>{
  let productTitle = 'My amazing product';
  productTitle = 'my Amazing changed'
  console.log('prodcutTitle',productTitle)

const productDescription = "bla bla bla bla bla"
console.log('productDescription',productDescription)

let productPrice = 100;
let isNew = false

const summary = `
  title: ${productTitle}
  description: ${productDescription}
  price: $ ${productPrice}
  isNex: ${isNew}
`

console.log('summary',summary)
})()
