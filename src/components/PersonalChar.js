import React,{Component} from 'react'
import './styles/PersonalChar.css'

class PersonalChar extends Component{
    constructor(props){
        super(props)
        this.personalChar=props
    }
    render(){
        return(
            <div className='personalChar'>
                <h2>Cechy Osobowe</h2>
                <textarea></textarea>
            </div>
        )
    }
}
export default PersonalChar