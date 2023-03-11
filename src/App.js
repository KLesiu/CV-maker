
import React, {Component} from 'react';

import './App.css'
import Header from './components/Header';
class App extends Component {
  constructor(){
    super()
    this.state={
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
      experience:[],
      experienceElement:{
        startWork:'',
        endWork:'',
        company:'',
        position:''
      },
      education:[],
      educationElement:{
        start:'',
        end:'',
        schoolName:''
      
      },
      skills:'',
      personalCharacteristics:'',
      hobbies:'',


      

    }
  }
  render(){
    return (
      <div>
        <Header />
        <form className='form'>
    
        </form>
      </div>
      );
  }
  
}

export default App;
