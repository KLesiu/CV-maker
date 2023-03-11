import React,{Component} from "react";
import './styles/Personal.css'

class Personal extends Component{
constructor(props){
    super()
    this.personalInfo=props
}
render(){
    
    return(
        <div className="personalInfo">
            <h2>Podstawowe Informacje</h2>
            <label>Imie i nazwisko:
            <input type="text" />
            </label>
            
            <label>Data urodzenia:
            <input type="date" />
            </label>
            <label>Pełny adres zamieszkania:
                <input type="text" />
            </label>
            <label>Kod pocztowy:
                <input type="text" />
            </label>
            <label>
                Miasto:
                <input type="text" />
            </label>
            <label>
                Województwo:
                <input type="text"/>
            </label>
            <label>
                Telefon:
                <input type="tel"/>
            </label>
            <label>
                E-mail:
                <input type="email" />
            </label>
        </div>
    )
}
}
export default Personal