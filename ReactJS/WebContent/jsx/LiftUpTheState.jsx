
class ButtonComp extends React.Component {
    render() {
        return (
            <button style={{color:this.props.active==1?'red':'blue'}} onClick={()=>{this.props.clickHandler(this.props.id,this.props.name)}} >
                {this.props.name}
            </button>
        ) 
    }
}

class Details extends React.Component {
    render() {
        return (
            <div>
                {this.props.details}
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {activeArray:[0,0,0], detailsVal:''};
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(id,details) {
        var arr = [0,0,0]
        arr[id] = 1
        this.setState({activeArray:arr, detailsVal:details})
    }

    render() {
        return (
            <div>
                <ButtonComp id={0} active={this.state.activeArray[0]} clickHandler={this.clickHandler} name="One" />
                <ButtonComp id={1} active={this.state.activeArray[1]} clickHandler={this.clickHandler} name="Two" />
                <ButtonComp id={2} active={this.state.activeArray[2]} clickHandler={this.clickHandler} name="Three" />
                <Details details={this.state.detailsVal} />
            </div>
        )
    }
}

ReactDOM.render( <App/>, document.getElementById("root") );
