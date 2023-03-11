import React,{Component} from 'react'

class Photo extends Component{
    constructor(props){
        super()
        this.photo=props.photo
    }
    render(){
        console.log(this.photo)
        return(
            <div className='personalPhoto'>
                {/* <img src='C:\channels4_profile.jpg'/> */}
            </div>
        )
    }
}
export default Photo