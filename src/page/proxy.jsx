import React, { Component } from "react";
import "../css/app.css"



export default class ProxyPage extends React.Component{
    constructor(props){
        super(props);
        // Don't call this.setState() here!
        this.state = { counter: 0 };
        this.abc = props.abc;
        
    }


    render(){
        window.electron.clickbutton("asasc","ASdasda")
        console.log("asfasdf"+this.props.abc);
        return <div style={{color:"red"}}>
            <input type="text" className="inputcustom" ></input>
            <br></br>
            <button className="buttoncustom" >Check</button>
        </div>
    }
}


