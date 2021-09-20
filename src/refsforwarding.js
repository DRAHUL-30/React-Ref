
import React from "react";

class Forwardref extends React.Component{
    constructor(props){
        super(props)
        this.aRef=React.createRef()
    }
    render(){
        return(
            <>
            <Counter ref={this.aRef} />
            <button onClick={()=>{console.log(this.aRef)}}>Ref</button>
            </>
        )
    }
}

const Counter=React.forwardRef((props,ref)=>{
    class Counter extends React.Component{
        constructor(props){
            super(props)
            this.state={count:0}
        }
    render(){
        return(
            <div>
                Count:{this.state.count}
                <button ref={ref} onClick={()=>this.setState({Count:this.state.count+1})}>Increase</button>
            </div>
        )
     }
    }
    return<Counter/>
})

export default Forwardref;