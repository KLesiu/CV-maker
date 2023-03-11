import React,{Component} from 'react'
import './styles/Education.css'
import uniqid from "uniqid"


class Education extends Component{
    constructor(props){
        super()
        this.schools=props
      
    }
    handleChange=(e)=>{
        this.setState({
          
            
          
          
        })
      }
  
    render(){

        return(
           
            
            <div className='propertiesEducation'>
            <label>Szkoła: <input name="schoolName" type="text"/></label>
            <label>Od:<input name='start' type="date" /></label>
            <label>Do:<input name='end' type="date" /></label>
            
            </div>
           
          
           
        )
    }
}
export default Education