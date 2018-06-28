
"use strict";


function ListItems(props) {
    return <li>{props.item}</li>
}


function ShoppingList(props) {
    return (
        <div>
            <h3>{props.header}</h3>
            <ol>
                <ListItems item={props.items[0]} />
                <ListItems item={props.items[1]} />
                <ListItems item={props.items[2]} />
            </ol>
        </div>
    )
}


function ShoppingTitle(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>Total Number of items: {props.numItems}</h2>
        </div>
    )
}


function MyShoppingApp(props) {
    return (
        <div>
            <ShoppingTitle title="My Shopping App" numItems="9" />
            <ShoppingList header="Food" items={['Apple','Bread','Cheese']} />
            <ShoppingList header="Cloth" items={['Shirt','Pant','Hat']} />
            <ShoppingList header="Supplies" items={['Pen','Paper','Glue']} />
        </div>
    )
}

ReactDOM.render(
    <MyShoppingApp />, document.getElementById('root')
)

