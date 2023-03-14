import React, {Component} from 'react';
import './App.css'
import uniqid from "uniqid"
 import Header from './components/Header';
import Personal from './components/Personal';
import Skills from './components/Skills';
import PersonalChar from './components/PersonalChar';
import Education from './components/Education';
import Photo from './components/Photo';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Print from './components/Prins';

class App extends Component {
  constructor(){
    super()
    this.state={
     
        name:'',
        birthDate:'',
        address:'',
        city:'',
        zipCode:'',
        
        province:'',
        phone:'',
        mail:'',
      
      
      
        FirstCompany:'',
        FirstPosition:'',
        FirstWorkStart:'',
        FirstWorkEnd:'',

        SecondCompany:'',
        SecondPosition:'',
        SecondWorkEnd:'',
        SecondWorkStart:'',

        ThirdCompany:'',
        ThirdPosition:'',
        ThirdWorkStart:'',
        ThirdWorkEnd:'',

        FourthCompany:'',
        FourthPosition:'',
        FourthWorkStart:'',
        FourthWorkEnd:'',

        FifthCompany:'',
        FifthPosition:'',
        FifthWorkStart:'',
        FifthWorkEnd:'',
      
        FirstStart:'',
        FirstEnd:'',
        FirstSchoolName:'',
        FirstId:uniqid(),
          
      
      
        SecondStart:'',
        SecondEnd:'',
        SecondSchoolName:'',
        SecondId:uniqid(),
     
      
        ThirdStart:'',
        ThirdEnd:'',
        ThirdSchoolName:'',
        ThirdId:uniqid(),
     
      
      skills:'',
      personalCharacteristics:'',
      hobbies:'',
      photo:'',
      createCv:false,
    

      

    }
    
  }
  handleChange=(e)=>{
    
     
      
      this.setState(
        {
       [`${e.target.name}`]:e.target.value  
       }
     )
     
   
    
   
  }
  onSubmit=(e)=>{
    e.preventDefault()
    this.setState({
      createCv:true
    })
    this.render()
  }
  previewFile=(e)=>{
   this.setState({
    photo:e.target.files[0]
   })
    
   
 
  }
  render(){
    if(this.state.createCv===true){
      document.querySelector('#generatorPage').classList.add('hidden')
      return(
        <main className='cv'>
          <h1><em>CURRICULUM VITAE</em></h1>
          
            <Personal personal={{
              name:this.state.name,
              birthDate:this.state.birthDate,
              address:this.state.address,
              city:this.state.city,
              zipCode:this.state.zipCode,
              province:this.state.province,
              phone:this.state.phone,
              mail:this.state.mail}} />
            <Photo photo={this.state.photo} />
          
          <Experience  experience={{FirstCompany:this.state.FirstCompany,FirstPosition:this.state.FirstPosition,FirstWorkStart:this.state.FirstWorkStart,FirstWorkEnd:this.state.FirstWorkEnd,SecondCompany:this.state.SecondCompany,SecondPosition:this.state.SecondPosition,SecondWorkStart:this.state.SecondWorkStart,SecondWorkEnd:this.state.SecondWorkEnd,ThirdCompany:this.state.ThirdCompany,ThirdPosition:this.state.ThirdPosition,ThirdWorkStart:this.state.ThirdWorkStart,ThirdWorkEnd:this.state.ThirdWorkEnd,FourthCompany:this.state.FourthCompany,FourthPosition:this.state.FourthPosition,FourthWorkStart:this.state.FourthWorkStart,FourthWorkEnd:this.state.FourthWorkEnd,FifthCompany:this.state.FifthCompany,FifthPosition:this.state.FifthPosition,FifthWorkStart:this.state.FifthWorkStart,FifthWorkEnd:this.state.FifthWorkEnd}}/>
          <Education education={{FirstSchoolName:this.state.FirstSchoolName,FirstStart:this.state.FirstStart,FirstEnd:this.state.FirstEnd,SecondSchoolName:this.state.SecondSchoolName,SecondStart:this.state.SecondStart,SecondEnd:this.state.SecondEnd,ThirdSchoolName:this.state.ThirdSchoolName,ThirdStart:this.state.ThirdStart,ThidEnd:this.state.ThirdEnd}} />
          <Skills skills={this.state.skills} />
          <PersonalChar personalChar={this.state.personalCharacteristics} />
          <Hobbies hobbies={this.state.hobbies} />
          <p id="agreement">Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb procesu rekrutacji, zgodnie z ustawą z dnia 29.08.1997r. o ochronie danych osobowych - Dz. U. Nr 133 poz.883.</p>
          <Print  />
        </main>

      )
    } 
    return (
      <div id="generatorPage">
        <Header />
        <form onSubmit={this.onSubmit} className='form'>
      
        <div className="personalInfo">
            <h2>Podstawowe Informacje</h2>
            <label>Imie i nazwisko:
            <input onChange={this.handleChange.bind(this)} name="name" type="text" />
            </label>
            
            <label>Data urodzenia:
            <input onChange={this.handleChange.bind(this)} name="birthDate" type="date" />
            </label>
            <label>Pełny adres zamieszkania:
                <input onChange={this.handleChange.bind(this)} name="address" type="text" />
            </label>
            <label>Kod pocztowy:
                <input onChange={this.handleChange.bind(this)} name="zipCode"type="text" />
            </label>
            <label>
                Miasto:
                <input onChange={this.handleChange.bind(this)} name="city" type="text" />
            </label>
            <label>
                Województwo:
                <input onChange={this.handleChange.bind(this)} name="province" type="text"/>
            </label>
            <label>
                Telefon:
                <input onChange={this.handleChange.bind(this)} name="phone"type="tel"/>
            </label>
            <label>
                E-mail:
                <input onChange={this.handleChange.bind(this)} name="mail" type="email" />
            </label>
        </div>
        <div className='skillsHolder'>
            <h2>Umiejętności</h2>
            <textarea onChange={this.handleChange.bind(this)} name="skills"></textarea>
        </div>
        <div className='personalChar'>
                <h2>Cechy Osobowe</h2>
                <textarea onChange={this.handleChange.bind(this)} name="personalCharacteristics"></textarea>
            </div>
            <div className='experiencesHolder'>
        <h2>Doświadczenie:</h2>
          <div className='propertiesExperience'>
            <label>Firma: <input name="FirstCompany" type="text" onChange={this.handleChange.bind(this)}/></label>
            <label>Stanowisko: <input name="FirstPosition" type="text" onChange={this.handleChange.bind(this)} /></label>
            <label>Od: <input name='FirstWorkStart' type="date" onChange={this.handleChange.bind(this)} /></label>
            <label>Do: <input name='FirstWorkEnd' type="date" onChange={this.handleChange.bind(this)} /></label>
          </div>
          <div className='propertiesExperience'>
            <label>Firma: <input name='SecondCompany' type="text" onChange={this.handleChange.bind(this)}/></label>
            <label>Stanowisko: <input name='SecondPosition' type="text" onChange={this.handleChange.bind(this)} /></label>
            <label>Od: <input name='SecondWorkStart' type="date" onChange={this.handleChange.bind(this)} /></label>
            <label>Do: <input name='SecondWorkEnd' type="date" onChange={this.handleChange.bind(this)} /></label>
          </div><div className='propertiesExperience'>
            <label>Firma: <input name='ThirdCompany' type="text" onChange={this.handleChange.bind(this)}/></label>
            <label>Stanowisko: <input name='ThirdPosition' type="text" onChange={this.handleChange.bind(this)} /></label>
            <label>Od: <input name='ThirdWorkStart' type="date" onChange={this.handleChange.bind(this)} /></label>
            <label>Do: <input name='ThirdWorkEnd' type="date" onChange={this.handleChange.bind(this)} /></label>
          </div><div className='propertiesExperience'>
            <label>Firma: <input name='FourthCompany' type="text" onChange={this.handleChange.bind(this)}/></label>
            <label>Stanowisko: <input name='FourthPosition' type="text" onChange={this.handleChange.bind(this)} /></label>
            <label>Od: <input name='FourthWorkStart' type="date" onChange={this.handleChange.bind(this)} /></label>
            <label>Do: <input name='FourthWorkEnd' type="date" onChange={this.handleChange.bind(this)} /></label>
          </div>
          <div className='propertiesExperience'>
            <label>Firma: <input name='FifthCompany' type="text" onChange={this.handleChange.bind(this)}/></label>
            <label>Stanowisko: <input name='FifthPosition' type="text" onChange={this.handleChange.bind(this)} /></label>
            <label>Od: <input name='FifthWorkStart' type="date" onChange={this.handleChange.bind(this)} /></label>
            <label>Do: <input name='FifthWorkEnd' type="date" onChange={this.handleChange.bind(this)} /></label>
          </div>
        </div>
        
        <div className='photoHolder'>
          <h2>Zdjęcie:</h2>
          <input id="myPhoto"  onChange={this.previewFile.bind(this)} name="photo"  type="file" />
        </div>
        <div className='hobbiesHolder'>
          <h2>Zainteresowania</h2>
          <textarea   onChange={this.handleChange.bind(this)} name="hobbies" />
        </div>
       
        <div className='educationHolder'>
            <h2>Wykształcenie</h2>
            <div className='propertiesEducation'>
            <label>Szkoła: <input onChange={this.handleChange.bind(this)} name="FirstSchoolName" type="text"/></label>
            <label>Od:<input onChange={this.handleChange.bind(this)} name='FirstStart' type="date" /></label>
            <label>Do:<input onChange={this.handleChange.bind(this)} name='FirstEnd' type="date" /></label>
            
            </div>
            <div className='propertiesEducation'>
            <label>Szkoła: <input onChange={this.handleChange.bind(this)}name="SecondSchoolName" type="text"/></label>
            <label>Od:<input onChange={this.handleChange.bind(this)} name='SecondStart' type="date" /></label>
            <label>Do:<input onChange={this.handleChange.bind(this)} name='SecondEnd' type="date" /></label>
            
            </div>
             <div className='propertiesEducation'>
            <label>Szkoła: <input onChange={this.handleChange.bind(this)} name="ThirdSchoolName" type="text"/></label>
            <label>Od:<input onChange={this.handleChange.bind(this)} name='ThirdStart' type="date" /></label>
            <label>Do:<input onChange={this.handleChange.bind(this)} name='ThirdEnd' type="date" /></label>
            
            </div>
          

            </div>
        
          
        
          
          
       
         <button className='buttonCreateCv' type='submit'>Stwórz!</button>
        </form>
      </div>
      );
  }
  
}

export default App;
