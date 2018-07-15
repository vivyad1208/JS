
"use strict";

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {message:"Initial Message"}
    }
    render(){
        return <h2>Message: {this.state.message} </h2>
    }
}



class CounterDidMount extends React.Component{
    constructor(props){
        super(props)
        //initial state set up
        this.state = {message:"initial message"}
    }
    componentDidMount() {
        //updating state
        this.setState({message:"New Message"})
    }
    render(){
        return <h2>Message: {this.state.message} </h2>
    }
}



class CounterStateChange extends React.Component{
    constructor(props){
        super(props)
        //initial state set up
        this.state = {counter:0}
    }
    componentDidMount() {
        //UPDATING STATE
        this.setState({counter:this.state.counter+1});  // Works only for the first time
        this.setState({counter:this.state.counter+1});  // Wont work
        // Updates the state, Increases the counter
        this.setState((prevState,props)=>{
            return { counter : prevState.counter + 1 }
        })
        // Increases the counter again
        this.setState((prevState,props)=>{
            return { counter : prevState.counter + 1 }
        })
    }
    render(){
        return <h2>Counter: {this.state.counter} </h2>
    }
}


ReactDOM.render(
    <CounterStateChange/>,
    document.getElementById("root")
)