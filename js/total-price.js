const products = [
    { name: 'Laptop', price: 80000 },
    { name: 'shirt', price: 1500 },
    { name: 'watch', price: 6000 },
    {name: 'phones', price: 25000}
]

let totalprice = 0;
for (const product of products) {
    totalprice = totalprice + product.price;
}
console.log(totalprice);


const cart = [
    
    { name: 'Laptop', price: 80000,qtn: 6 },
    { name: 'shirt', price: 1500,qtn: 5 },
    { name: 'watch', price: 6000,qtn: 1 },
    { name: 'phones', price: 25000,qtn: 1 }
]

// let cartTotal = 0;
/* for (const product of cart) {
    const productTotal = product.price * product.qtn;
    cartTotal = cartTotal + productTotal;
}

console.log(cartTotal); */

function shopingCart(parameter) {
    let cartTotal = 0;
    for (const product of cart) {
        const productTotal = product.price * product.qtn;
        cartTotal = cartTotal + productTotal;
    }

    return cartTotal;
}
console.log(shopingCart(cart));