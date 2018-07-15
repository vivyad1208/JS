
"use strict";

var fruits = [
    { product: "Apple", price: 3 },
    { product: "Banana", price: 1 },
    { product: "Carrot", price: 2 },
    { product: "Donuts", price: 5 },
    { product: "Eggplant", price: 4 }
]

ReactDOM.render(
    <ol>{
        fruits.map( (item) => 
            <li>Product: {item.product} | Price: ${item.price}  </li>
        )
    }</ol>,
    document.getElementById("root")
)
