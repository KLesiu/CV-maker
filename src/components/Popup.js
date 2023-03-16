import React from 'react'
import './styles/Popup.css'
const Popup=(props)=>{
const closePopUp=()=>{
    document.querySelector('.popUp').classList.add('hidden')
}
if(props.popUp===false){
    
    return(
        <div className='popUp'>
            <h2>Zanim zaczniesz</h2>
            <button onClick={closePopUp}>X</button>
            <p>Jeśli chcesz dodać zdjęcie, zrób to na samym początku wypełniania formularza. Jeśli wygenerujesz CV możesz w każdej chwili wrócić do formularza i zastosować poprawki. CV można zapisać w PDF klikając przycisk "Drukuj" i ustawiając w panelu drukarki opcje "Zapisz do PDF" lub wydrukować. Nie musisz zapełnić wszystkich pól np. w sekcji "Wykształcenie", możesz dostosować to do siebie. </p>
            <p><a target="_blank" href="https://github.com/KLesiu">Twórca aplikacji</a></p>
        </div>
    )
}

}
export default Popup