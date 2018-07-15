
"use strict";


var numberElements = [];
for (var i = 1; i <= 5; i++) {
    numberElements.push(<li>{i}</li>);
}


ReactDOM.render(
    <ul>{numberElements}</ul>,
    document.getElementById("root")
)
