import React from 'react'
import './styles/Print.css'

const Print=()=>{
    function printCv(){
        window.print()
    }
    return(
        <button id='printCv' onClick={printCv}><span className="material-symbols-outlined">
        print
        </span></button>
    )
}
export default Print