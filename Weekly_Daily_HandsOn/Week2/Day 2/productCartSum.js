// Products array
const products = [
    { name: "Laptop", price: 35000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 }
];

// Arrow function to calculate total
const calculateTotal = (items) => 
    items
        .map(item => item.price * item.quantity)   // subtotal
        .reduce((sum, value) => sum + value, 0);   // total

// Calculate total
const totalAmount = calculateTotal(products);

// Create invoice using template literals
const invoice = `
${products.map(item =>
    `${item.name} - ₹${item.price} x ${item.quantity}`
).join("\n")}

Total Amount: ₹${totalAmount}
`;

// Display result
console.log(invoice);