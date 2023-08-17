const form = document.querySelector('#inputForm')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const email = document.querySelector('#inputEmail');
    const password = document.querySelector('#inputPassword');

    const pos1 = email.value.indexOf('@');
    const pos2 = email.value.indexOf('.');

    if((!email.value.includes('@') || !email.value.includes('.')) || (Math.abs(pos1-pos2)==1)) {
        alert("Please enter a valid E-Mail");
    } else if(firstName.value==="" || firstName.value===" " || lastName.value==="" || lastName.value===" "){
        alert("Please enter Name")
    } else {
        alert("You are Registered")
    }
})