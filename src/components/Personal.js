import React,{Component} from "react";
import './styles/Personal.css'

class Personal extends Component{
    constructor(props){
        super()
        this.personal=props.personal
    }
    render(){
        
        return(
            <div className="personalInformation">
                <h2><b>{this.personal.name}</b></h2>
                <span>ur. {this.personal.birthDate}</span>
                <span>ul. {this.personal.address}</span>
                <span>{this.personal.zipCode} {this.personal.city}</span>
                <span>woj. {this.personal.province}</span>
                <span>{this.personal.phone}</span>
                <span>e-mail: {this.personal.mail}</span>
            </div>
        )
    }
}
export default Personal