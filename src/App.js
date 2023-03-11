import React, {Component} from 'react';
import './App.css'
import uniqid from "uniqid"
 import Header from './components/Header';
import Personal from './components/Personal';
import Skills from './components/Skills';
import PersonalChar from './components/PersonalChar';
class App extends Component {
  constructor(){
    super()
    this.state={
      personalInfo:{
        name:'',
        birthDate:'',
        address:'',
        city:{
          zipCode:'',
          cityName:'',
          province:''
        },
        phone:'',
        mail:'',
      },
      
      experience:[],
      experienceElement:{
        startWork:'',
        endWork:'',
        company:'',
        position:'',
        id:uniqid()
      },
      education:[],
      educationElement:{
        start:'',
        end:'',
        schoolName:'',
        id:uniqid()
      
      },
      skills:'',
      personalCharacteristics:'',
      hobbies:'',


      

    }
  }
  // handleChange(e){
  //   this.setState({

  //   })
  // }
  render(){
    
    return (
      <div>
        <Header />
        <form className='form'>
        <Personal personal={this.state.personalInfo}/>
        <Skills skills={this.state.skills} />
        <PersonalChar personalChar={this.state.personalCharacteristics} />
        </form>
      </div>
      );
  }
  
}

export default App;
