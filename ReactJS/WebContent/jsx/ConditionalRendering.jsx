
"use strict";

function HelloWorld() {
    return (
        <div>
            <h1>props.firstName</h1>
            <h1>props.lastName</h1>
        </div>
    )
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById("root")
)
