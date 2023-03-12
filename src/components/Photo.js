import React,{Component} from 'react'

class Photo extends Component{
    constructor(props){
        super()
        this.photo=props.photo
    }
    render(){
        
        return(
            <div className='personalPhoto'>
                <img target="_blank"src={this.photo}/>
            </div>
        )
    }
}
export default Photo