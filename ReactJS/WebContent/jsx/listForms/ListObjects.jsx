
"use strict";

var fruits = [
    { product: "Apple", price: 3 },
    { product: "Banana", price: 1 },
    { product: "Carrot", price: 2 },
    { product: "Donuts", price: 5 },
    { product: "Eggplant", price: 4 }
]

var fruitElements = fruits.map((item) => {
    return <li>Product: {item.product} | Price: ${item.price}  </li>
});


ReactDOM.render(
    <ol>{fruitElements}</ol>,
    document.getElementById("root")
)
