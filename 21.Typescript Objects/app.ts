interface item {
    name:string
    price:number
}
const book: item = {
    name: 'ESSENTIAL TYPESCRIPT'
    price:550
}
const fruits: item={
    name:'apple'
    price:300
}
console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`fruits name: ${fruits.name}, price: $${fruits.price}`)