import React, {Component} from 'react';
import './App.css'

 import Header from './components/Header';
import Personal from './components/Personal';
import Skills from './components/Skills';
import PersonalChar from './components/PersonalChar';
import Education from './components/Education';
import Photo from './components/Photo';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Print from './components/Prins';
import Popup from './components/Popup';

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
          
      
      
        SecondStart:'',
        SecondEnd:'',
        SecondSchoolName:'',
       
     
      
        ThirdStart:'',
        ThirdEnd:'',
        ThirdSchoolName:'',
     
      
      skills:'',
      personalCharacteristics:'',
      hobbies:'',
      photo:'',
      createCv:false,
      popUp:false,
    

      

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
      createCv:true,
      popUp:true,
    })
    this.render()
  }
  previewFile=(e)=>{
   this.setState({
    photo:e.target.files[0]
   })
    
   
 
  }
  hideAndEdit=()=>{
    
    this.setState({
      createCv:false
    })
    
    this.render()

  }
  render(){
    if(this.state.createCv===true){
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
          <button id="edit" onClick={this.hideAndEdit}>Edytuj</button>
        </main>

      )
    } 
    return (
      <div id="generatorPage">
        <Header />
        <Popup popUp={this.state.popUp}/>
        <form onSubmit={this.onSubmit} className='form'>
      
        <div className="personalInfo">
            <h2>Podstawowe Informacje</h2>
            <label>Imię i nazwisko:
            <input value={this.state.name||""} onChange={this.handleChange.bind(this)} name="name" type="text" />
            </label>
            
            <label>Data urodzenia:
            <input value={this.state.birthDate||''} onChange={this.handleChange.bind(this)} name="birthDate" type="date" />
            </label>
            <label>Adres zamieszkania:
                <input value={this.state.address||''} onChange={this.handleChange.bind(this)} name="address" type="text" />
            </label>
            <label>Kod pocztowy:
                <input value={this.state.zipCode||''} onChange={this.handleChange.bind(this)} name="zipCode"type="text" />
            </label>
            <label>
                Miasto:
                <input value={this.state.city||''} onChange={this.handleChange.bind(this)} name="city" type="text" />
            </label>
            <label>
                Województwo:
                <input value={this.state.province||''} onChange={this.handleChange.bind(this)} name="province" type="text"/>
            </label>
            <label>
                Telefon:
                <input value={this.state.phone||''} onChange={this.handleChange.bind(this)} name="phone"type="tel"/>
            </label>
            <label>
                E-mail:
                <input value={this.state.mail||''} onChange={this.handleChange.bind(this)} name="mail" type="email" />
            </label>
        </div>
        <div className='skillsHolder'>
            <h2>Umiejętności</h2>
            <textarea value={this.state.skills||''} onChange={this.handleChange.bind(this)} name="skills"></textarea>
        </div>
        <div className='personalChar'>
                <h2>Cechy Osobowe</h2>
                <textarea value={this.state.personalCharacteristics||''} onChange={this.handleChange.bind(this)} name="personalCharacteristics"></textarea>
            </div>
            <div className='photoHolder'>
          <h2>Zdjęcie:</h2>
          <input  id="myPhoto"  onChange={this.previewFile.bind(this)} name="photo"  type="file" />
        </div>
        <div className='hobbiesHolder'>
          <h2>Zainteresowania</h2>
          <textarea value={this.state.hobbies||''}  onChange={this.handleChange.bind(this)} name="hobbies" />
        </div>
            <div className='experiencesHolder'>
        <h2>Doświadczenie:</h2>
          <div className='propertiesExperience'>
            <label>Firma: <input value={this.state.FirstCompany||''} name="FirstCompany" type="text" onChange={this.handleChange.bind(this)}/></label>
            <label>Stanowisko: <input value={this.state.FirstPosition||''} name="FirstPosition" type="text" onChange={this.handleChange.bind(this)} /></label>
            <label>Od: <input value={this.state.FirstWorkStart||''} name='FirstWorkStart' type="date" onChange={this.handleChange.bind(this)} /></label>
            <label>Do: <input value={this.state.FirstWorkEnd||''} name='FirstWorkEnd' type="date" onChange={this.handleChange.bind(this)} /></label>
          </div>
          <div className='propertiesExperience'>
            <label>Firma: <input value={this.state.SecondCompany||''} name='SecondCompany' type="text" onChange={this.handleChange.bind(this)}/></label>
            <label>Stanowisko: <input value={this.state.SecondPosition||''} name='SecondPosition' type="text" onChange={this.handleChange.bind(this)} /></label>
            <label>Od: <input value={this.state.SecondWorkStart||''} name='SecondWorkStart' type="date" onChange={this.handleChange.bind(this)} /></label>
            <label>Do: <input value={this.state.SecondWorkEnd||''} name='SecondWorkEnd' type="date" onChange={this.handleChange.bind(this)} /></label>
          </div><div className='propertiesExperience'>
            <label>Firma: <input value={this.state.ThirdCompany||''} name='ThirdCompany' type="text" onChange={this.handleChange.bind(this)}/></label>
            <label>Stanowisko: <input value={this.state.ThirdPosition||''} name='ThirdPosition' type="text" onChange={this.handleChange.bind(this)} /></label>
            <label>Od: <input value={this.state.ThirdWorkStart||''} name='ThirdWorkStart' type="date" onChange={this.handleChange.bind(this)} /></label>
            <label>Do: <input value={this.state.ThirdWorkEnd||''} name='ThirdWorkEnd' type="date" onChange={this.handleChange.bind(this)} /></label>
          </div><div className='propertiesExperience'>
            <label>Firma: <input value={this.state.FourthCompany||''} name='FourthCompany' type="text" onChange={this.handleChange.bind(this)}/></label>
            <label>Stanowisko: <input value={this.state.FourthPosition||''} name='FourthPosition' type="text" onChange={this.handleChange.bind(this)} /></label>
            <label>Od: <input value={this.state.FourthWorkStart||''} name='FourthWorkStart' type="date" onChange={this.handleChange.bind(this)} /></label>
            <label>Do: <input value={this.state.FourthWorkEnd||''} name='FourthWorkEnd' type="date" onChange={this.handleChange.bind(this)} /></label>
          </div>
          <div className='propertiesExperience'>
            <label>Firma: <input value={this.state.FifthCompany||''} name='FifthCompany' type="text" onChange={this.handleChange.bind(this)}/></label>
            <label>Stanowisko: <input value={this.state.FifthPosition||''} name='FifthPosition' type="text" onChange={this.handleChange.bind(this)} /></label>
            <label>Od: <input value={this.state.FifthWorkStart||''} name='FifthWorkStart' type="date" onChange={this.handleChange.bind(this)} /></label>
            <label>Do: <input value={this.state.FifthWorkEnd||''} name='FifthWorkEnd' type="date" onChange={this.handleChange.bind(this)} /></label>
          </div>
        </div>
        
       
       
        <div className='educationHolder'>
            <h2>Wykształcenie</h2>
            <div className='propertiesEducation'>
            <label className="firstLabelSchool">Szkoła: <input value={this.state.FirstSchoolName||''} onChange={this.handleChange.bind(this)} name="FirstSchoolName" type="text"/></label>
            <label>Od:<input value={this.state.FirstStart||''} onChange={this.handleChange.bind(this)} name='FirstStart' type="date" /></label>
            <label>Do:<input value={this.state.FirstEnd||''} onChange={this.handleChange.bind(this)} name='FirstEnd' type="date" /></label>
            
            </div>
            <div className='propertiesEducation'>
            <label className="firstLabelSchool">Szkoła: <input value={this.state.SecondSchoolName} onChange={this.handleChange.bind(this)}name="SecondSchoolName" type="text"/></label>
            <label>Od:<input value={this.state.SecondStart||''} onChange={this.handleChange.bind(this)} name='SecondStart' type="date" /></label>
            <label>Do:<input value={this.state.SecondEnd||''} onChange={this.handleChange.bind(this)} name='SecondEnd' type="date" /></label>
            
            </div>
             <div className='propertiesEducation'>
            <label className="firstLabelSchool">Szkoła: <input value={this.state.ThirdSchoolName||''} onChange={this.handleChange.bind(this)} name="ThirdSchoolName" type="text"/></label>
            <label>Od:<input  value={this.state.ThirdStart||''} onChange={this.handleChange.bind(this)} name='ThirdStart' type="date" /></label>
            <label>Do:<input value={this.state.ThirdEnd||''} onChange={this.handleChange.bind(this)} name='ThirdEnd' type="date" /></label>
            
            </div>
          

            </div>
        
          
        
          
          
       
         <button className='buttonCreateCv' type='submit'>Stwórz!</button>
        </form>
      </div>
      );
  }
  
}

export default App;
