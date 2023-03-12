import React,{Component} from 'react'
import './styles/Education.css'
class Education extends Component{
    constructor(props){
        super()
        this.education=props.education
    }
    render(){
        let counter=3
        if(this.education.ThirdSchoolName==='') counter=2
        if(this.education.SecondSchoolName==='') counter=1
        if(this.education.FirstSchoolName==='') counter=0
        if(counter===3){
            return(
            <div className='personalEducation'>
                <h2>Wykształcenie:</h2>
                <div className='personalEducationHolder'>
                    <span>Od: {this.education.ThirdStart} do: {this.education.ThirdEnd || 'aktualnie'}</span>
                    <span>{this.education.ThirdSchoolName}</span>

                </div>
                <div className='personalEducationHolder'>
                    <span>Od: {this.education.SecondStart} do: {this.education.SecondEnd}</span>
                    <span>{this.education.SecondSchoolName}</span>
                </div>
                <div className='personalEducationHolder'>
                    <span>Od: {this.education.FirstStart} do: {this.education.FirstEnd}</span>
                    <span>{this.education.FirstSchoolName}</span>
                </div>
            </div>  
            )
        }else if(counter===2){
            return(
                <div className='personalEducation'>
                <h2>Wykształcenie:</h2>
                
                <div className='personalEducationHolder'>
                    <span>Od: {this.education.SecondStart} do: {this.education.SecondEnd || 'aktualnie'}</span>
                    <span>{this.education.SecondSchoolName}</span>
                </div>
                <div className='personalEducationHolder'>
                    <span>Od: {this.education.FirstStart} do: {this.education.FirstEnd}</span>
                    <span>{this.education.FirstSchoolName}</span>
                </div>
            </div>  
            )
        }else if(counter===1){
            return(
                <div className='personalEducation'>
                <h2>Wykształcenie:</h2>
                
               
                <div className='personalEducationHolder'>
                    <span>Od: {this.education.FirstStart} do: {this.education.FirstEnd || 'aktualnie'}</span>
                    <span>{this.education.FirstSchoolName}</span>
                </div>
            </div>  
            )
        }else{
            return(
                <div className='personalEducation'>
                    <h2>Wykształcenie:</h2>
                    <div className='personalEducationHolder'>
                        <span>Brak</span>
                        </div>
                </div>
            )
        }
    }
    
}
export default Education