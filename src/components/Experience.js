import React,{Component} from 'react'
import './styles/Experience.css'
class Experience extends Component{
    constructor(props){
        super()
        this.experience=props.experience
    }
    render(){
        let counter=5
        if(this.experience.FifthCompany==='') counter=4
        if(this.experience.FourthCompany==='') counter=3
        if(this.experience.ThirdCompany==='') counter=2
        if(this.experience.SecondCompany==='') counter=1
        if(this.experience.FirstCompany==='') counter=0

        if(counter===5){
            return(
                <div className='personalExperience'>
                    <h2>Doświadczenie:</h2>
                    <div className='personalExperienceHolder'>
                        <span>Od: {this.experience.FifthWorkStart} do: {this.experience.FifthWorkEnd || 'aktualnie'}</span>
                        <span>{this.experience.FifthCompany} na stanowisku: {this.experience.FifthPosition}</span>
                    </div>
                    <div className='personalExperienceHolder'>
                    <span>Od: {this.experience.FourthWorkStart} do: {this.experience.FourthWorkEnd}</span>
                        <span>{this.experience.FourthCompany} na stanowisku: {this.experience.FourthPosition}</span>
                    </div>
                    <div className='personalExperienceHolder'>
                    <span>Od: {this.experience.ThirdWorkStart} do: {this.experience.ThirdWorkEnd}</span>
                        <span>{this.experience.ThirdCompany} na stanowisku: {this.experience.ThirdPosition}</span>
                    </div>
                    <div className='personalExperienceHolder'>
                    <span>Od: {this.experience.SecondWorkStart} do: {this.experience.SecondWorkEnd}</span>
                        <span>{this.experience.SecondCompany} na stanowisku: {this.experience.SecondPosition}</span>
                    </div>
                    <div className='personalExperienceHolder'>
                    <span>Od: {this.experience.FirstWorkStart} do: {this.experience.FirstWorkEnd}</span>
                        <span>{this.experience.FirstCompany} na stanowisku: {this.experience.FirstPosition}</span>
                    </div>
                </div>
            )
        }
        if(counter===4){
            return(
                <div className='personalExperience'>
                    <h2>Doświadczenie:</h2>
                    <div className='personalExperienceHolder'>
                    <span>Od: {this.experience.FourthWorkStart} do: {this.experience.FourthWorkEnd||'aktualnie'}</span>
                        <span>{this.experience.FourthCompany} na stanowisku:{this.experience.FourthPosition}</span>
                    </div>
                    <div className='personalExperienceHolder'>
                    <span>Od: {this.experience.ThirdWorkStart} do: {this.experience.ThirdWorkEnd}</span>
                        <span>{this.experience.ThirdCompany} na stanowisku: {this.experience.ThirdPosition}</span>
                    </div>
                    <div className='personalExperienceHolder'>
                    <span>Od: {this.experience.SecondWorkStart} do: {this.experience.SecondWorkEnd}</span>
                        <span>{this.experience.SecondCompany} na stanowisku: {this.experience.ThirdPosition}</span>
                    </div>
                    <div className='personalExperienceHolder'>
                    <span>Od: {this.experience.FirstWorkStart} do: {this.experience.FirstWorkEnd}</span>
                        <span>{this.experience.FirstCompany} na stanowisku: {this.experience.FifthPosition}</span>
                    </div>
                </div>
            )
        }
        if(counter===3){
            return(
                <div className='personalExperience'>
                <h2>Doświadczenie:</h2>
                
                <div className='personalExperienceHolder'>
                <span>Od: {this.experience.ThirdWorkStart} do: {this.experience.ThirdWorkEnd||'aktualnie'}</span>
                    <span>{this.experience.ThirdCompany} na stanowisku: {this.experience.ThirdPosition}</span>
                </div>
                <div className='personalExperienceHolder'>
                <span>Od: {this.experience.SecondWorkStart} do: {this.experience.SecondWorkEnd}</span>
                    <span>{this.experience.SecondCompany} na stanowisku: {this.experience.SecondPosition}</span>
                </div>
                <div className='personalExperienceHolder'>
                <span>Od: {this.experience.FirstWorkStart} do: {this.experience.FirstWorkEnd}</span>
                    <span>{this.experience.FirstCompany} na stanowisku: {this.experience.FirstPosition}</span>
                </div>
            </div>
            )
        }
        if(counter===2){
            return(
<div className='personalExperience'>
            <h2>Doświadczenie:</h2>
            
            <div className='personalExperienceHolder'>
            <span>Od: {this.experience.SecondWorkStart} do: {this.experience.SecondWorkEnd||'aktualnie'}</span>
                <span>{this.experience.SecondCompany} na stanowisku:{this.experience.SecondPosition}</span>
            </div>
            <div className='personalExperienceHolder'>
            <span>Od: {this.experience.FirstWorkStart} do: {this.experience.FirstWorkEnd}</span>
                <span>{this.experience.FirstCompany} na stanowisku:{this.experience.FirstPosition}</span>
            </div>
        </div>
            )
            
        }
        if(counter===1){
            return(
<div className='personalExperience'>
            <h2>Doświadczenie:</h2>
            
            <div className='personalExperienceHolder'>
            <span>Od: {this.experience.FirstWorkStart} do: {this.experience.FirstWorkEnd||'aktualnie'}</span>
                <span>{this.experience.FirstCompany} na stanowisku: {this.experience.FirstPosition}</span>
            </div>
        </div>
            )
            
        }
        if(counter===0){
            <div className='personalExperience'>
            <h2>Doświadczenie:</h2>
            <span>Brak</span>
           
        </div>
        }
        
    }
}
export default Experience