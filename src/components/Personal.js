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
                <span style={{display:'flex',alignItems:'center',justifyContent:'flex-start', gap:5+'%'}}><span style={{fontSize:15+'px',width:3+'%'}} className="material-symbols-outlined">
                    call</span>{this.personal.phone}</span>
                <span style={{display:'flex',alignItems:'center',justifyContent:'flex-start', gap:5+'%'}}><span style={{fontSize:15+'px',width:3+'%'}} className="material-symbols-outlined">
                    mail</span>{this.personal.mail}</span>
            </div>
        )
    }
}
export default Personal