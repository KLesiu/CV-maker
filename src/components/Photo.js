import React from 'react'
import './styles/Photo.css'
const Photo=(props)=>{
    if(props.photo===''){
        return 
    }
    const data=props.photo 
   
    const reader=new FileReader();
    reader.readAsDataURL(data)
   function read(){
        return reader.onload=function(event){
        document.getElementById('avatar').src=event.target.result
}
    }
    read()
       return(
            <div className='personalPhoto'>
                         <img id="avatar" alt="yourPhoto" src="" />
                     </div>  
        )
    
    
   
}
export default Photo