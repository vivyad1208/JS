
"use strict";

class Welcome extends React.Component {
    render(){
        return <h1>Message: {this.props.message}</h1>
    }
}

//renders <h1>Message: {props.message}</h1>

ReactDOM.render(
    <Welcome message="Hello"/>,
    document.getElementById("root")
)
