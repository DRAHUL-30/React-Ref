import React from "react";

class childRef extends React.Component{
    constructor(props){
        super(props)
        this.refInput=React.createRef();
        this.state={
            value:"",
            counter:0
        }
    }

    handleChange=()=>{
        this.setState({value:this.refInput.current.value})
    }

    handleCounter=(ab)=>{
        if(ab==="inc") this.setState({Counter:this.state.counter+1})
        else this.setState({Counter:0})
    }


    render(){
        return(
            <>
            <h1>childRef</h1>
            <p>Class</p>
            <input type="text" ref={this.refInput}></input>
            <button type="submit" onClick={this.handleChange}>Submit</button>
            <p>Counter:{this.state.counter}</p>
            <p>{this.state.value}</p>
            <button onClick={()=>{this.handleCounter('inc')}}>Inc</button>
            <button onClick={()=>{this.handleCounter('res')}}>Reset</button>
            </>
        )
    }
}

export default childRef;