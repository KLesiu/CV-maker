import React,{Component} from 'react'
import './styles/Hobbies.css'

class Hobbies extends Component{
    constructor(props){
        super()
        this.hobbies=props.hobbies
    }
    render(){
        return(
            <div className='personalHobbies'>
            <h2>Zainteresowania:</h2>
            <div className='personalHobbiesHolder'>
                <p>{this.hobbies}</p>
            </div>

        </div>
        )
    }
}
export default Hobbies