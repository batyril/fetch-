import {UI_ELEMETS} from "../js/view.js";

let massage = undefined;
let endMale= undefined;
UI_ELEMETS.FORM.addEventListener('submit', function(){
    event.preventDefault();
    massage = UI_ELEMETS.FORM_TEXT.value;
    UI_ELEMETS.FORM_TEXT.value =''
    console.log(massage);
    GetMale(massage);
})




function GetMale(name){
    const firstName = name;
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;
    fetch(url)
        .then(response => response.json())
        .then(user => endMale = user.gender);
    UI_ELEMETS.MALE.textContent =  `name: ${massage} gender: ${endMale}`;
}
