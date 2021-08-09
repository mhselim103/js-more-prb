let phones = [
    { name: 'samsung s5', price: 45000, camera: 10, storage: 64 },
    { name: 'samsung s6', price: 5000, camera: 20, storage: 24 },
    { name: 'xiaomi', price: 20000, camera: 48, storage: 128 },
    { name: 'Realme', price: 25000, camera: 64, storage: 256 }
    
];
let cheapest = phones[0];
for (const phone of phones) {
   if (phone.price < cheapest.price) {
       cheapest = phone;
   }
}

console.log(cheapest);