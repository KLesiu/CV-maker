import React,{Component} from 'react'
import './styles/Skills.css'

class Skills extends Component{
    constructor(props){
        super()
        this.skills=props
    }
    render(){
        return(
        <div className='skillsHolder'>
            <h2>Umiejętności</h2>
            <textarea></textarea>
        </div>
        )
        
    }
}
export default Skills