"use strict";

var messageElement = document.getElementById("message");

class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" }
        this.inputHandler = this.inputHandler.bind(this)
    }
    inputHandler(event) {
        this.setState({value:event.target.value}, () => messageElement.innerHTML = this.state.value )
    }
    render() {
        return <input onChange={this.inputHandler} />
    }
}

ReactDOM.render(
    <ControlledInput/> , document.getElementById("root")
)
