
"use strict";

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {counter:0};
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler() {
        this.setState((prevState,props)=>{
            return {counter:prevState.counter+1}
        })
    }
    render() {
        return ( 
            <h3>
                Increase Counter:
                <button onClick={this.clickHandler} style={{width:50,cursor:'pointer'}} >
                    {this.state.counter}
                </button>
            </h3>
        )
    }

}

ReactDOM.render(
    <Counter />,
    document.getElementById("root")
)