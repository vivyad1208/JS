
"use strict";

function HelloWorld(props) {
    return (
        <div>
            <h1>The name is {props.lastName}</h1>
            <h1>{props.firstName} {props.lastName}</h1>
        </div>
    )
}

ReactDOM.render(
    <HelloWorld firstName="James" lastName="Bond"  />,
    document.getElementById("root")
)
