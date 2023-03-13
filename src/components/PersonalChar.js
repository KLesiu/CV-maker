import React,{Component} from 'react'
import './styles/PersonalChar.css'

class PersonalChar extends Component{
    constructor(props){
        super(props)
        this.personalChar=props.personalChar
    }
    render(){
        return(
            <div className='personalChara'>
            <h2>Cechy osobowe:</h2>
            <div className='personalCharaHolder'>
                <p>{this.personalChar}</p>
            </div>

        </div>
        )
    }
}
export default PersonalChar