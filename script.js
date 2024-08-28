function verifNom(){
    var nom = document.querySelector("#nom").value;
    return nom.length >= 2;
}

function verifPre(){
    var prenom = document.querySelector("#prenom").value;
    return prenom.length >= 2;
}

function verifAge(){
    var age = document.querySelector("#age").value;
    return !isNaN(age) && age >= 10;
}

function verifPseudo(){
    var pseudo = document.querySelector("#pseudo").value;
    return pseudo.length >= 6;
}

function verifMail(){
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var email = document.querySelector("#email").value;
    return email.match(emailRegex);
}

function verifMdp(){
    var mdp = document.querySelector("#motdepasse").value;
    return mdp.length >= 6;
}

function validateForm() {
    var nom = document.querySelector("#nom").value;
    var prenom = document.querySelector("#prenom").value;
    var age = document.querySelector("#age").value;
    var pseudo = document.querySelector("#pseudo").value;
    var email = document.querySelector("#email").value;
    var motdepasse = document.querySelector("#motdepasse").value;
    var errorMessage = document.querySelector("#errorMessage");

    if (nom === '' || prenom === '' || age === ''|| pseudo === ''|| email === '' || motdepasse === '') {
        errorMessage.textContent = 'Veuillez remplir tous les champs.';
        return false;
    }
    else if(!verifNom() || !verifPre() || !verifAge() || !verifPseudo() || !verifMail() || !verifMdp()){
        errorMessage.textContent = 'Certains champs ne sont pas correctement remplis';
        return false;
    } else {
        errorMessage.textContent = '';
        alert("MERCI !!!")
        return true;
    }
}


const nom = document.querySelector("#nom")
nom.addEventListener("input", function(){
    if(verifNom() || nom.value == ""){
        nom.nextElementSibling.style.display = "none";
    } else{
        nom.nextElementSibling.style.display = "block";
    }
})

const prenom = document.querySelector("#prenom")
prenom.addEventListener("input", function(){
    if(verifPre() || prenom.value == ""){
        prenom.nextElementSibling.style.display = "none";
    } else{
        prenom.nextElementSibling.style.display = "block";
    }
})

const age = document.querySelector("#age")
age.addEventListener("input", function(){
    if(verifAge() || age.value == ""){
        age.nextElementSibling.style.display = "none";
    } else{
        age.nextElementSibling.style.display = "block";
    }
})

const pseudo = document.querySelector("#pseudo")
pseudo.addEventListener("input", function(){
    if(verifPseudo() || pseudo.value == ""){
        pseudo.nextElementSibling.style.display = "none";
    } else{
        pseudo.nextElementSibling.style.display = "block";

    }
})

const mail = document.querySelector("#email")
mail.addEventListener("input", function(){
    if(verifMail() || mail.value == ""){
        mail.nextElementSibling.style.display = "none";
    } else{
        mail.nextElementSibling.style.display = "block";
    }
})

const mdp = document.querySelector("#motdepasse")
mdp.addEventListener("input", function(){
    if(verifMdp() || mdp.value == ""){
        mdp.nextElementSibling.style.display = "none";
    } else{
        mdp.nextElementSibling.style.display = "block";
    }
})