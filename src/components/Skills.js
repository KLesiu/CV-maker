import React,{Component} from 'react'
import './styles/Skills.css'

class Skills extends Component{
    constructor(props){
        super()
        this.skills=props.skills
    }
    render(){
        return(
        <div className='personalSkills'>
            <h2>Umiejętności:</h2>
            <div className='personalSkillsHolder'>
                <p>{this.skills}</p>
            </div>

        </div>
        )
        
    }
}
export default Skills