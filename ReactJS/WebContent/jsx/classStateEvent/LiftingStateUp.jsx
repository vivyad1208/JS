"use strict";

class Detail extends React.Component {
    render() {
        return <h4>{this.props.detail}</h4>
    }
}


class Button extends React.Component {
    render() {
        return (
            <button style={{color:this.props.active?'red':'blue'}}
              onClick = { () => { this.props.clickHandler(this.props.id,this.props.name) } }>
                {this.props.name}
            </button>
        )
    }
}


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {activeArray:[0,0,0,0], detail:"Detail Not Set" }
        this.clickHandler = this.clickHandler.bind(this)
    }
    // Accepts the button
    clickHandler(id, detail) {
        var arr = [0,0,0,0];
        arr[id] = 1;
        this.setState({activeArray:arr, detail:detail})
    }
    render() {
        return (
            <div>
                <Button clickHandler={this.clickHandler} id={0} active={this.state.activeArray[0]} name="One" />
                <Button clickHandler={this.clickHandler} id={1} active={this.state.activeArray[1]} name="Two" />
                <Button clickHandler={this.clickHandler} id={2} active={this.state.activeArray[2]} name="Three" />
                <Button clickHandler={this.clickHandler} id={3} active={this.state.activeArray[3]} name="Four" />
                <Detail detail={this.state.detail} />
            </div>
        )
    }
}

ReactDOM.render ( <App/>, document.getElementById("root"))
