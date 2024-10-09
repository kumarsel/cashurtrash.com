function schedulePickup() {
    alert("Pickup scheduled! We will contact you soon.");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent! We'll get back to you shortly.");
});

const prices = [
    { item: 'Newspaper', price: 9 },
    { item: 'Plastic', price: 8 },
    { item: 'Iron', price: 10 },
];

const priceTable = document.getElementById('price-table');
prices.forEach(price => {
    const row = document.createElement('div');
    row.textContent = `${price.item}: ₹${price.price}/kg`;
    priceTable.appendChild(row);
});
