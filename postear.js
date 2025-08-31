const supportedContactPlatforms = ["Whatsapp", "Telegram", "X", "Instagram", "Tiktok", "Fotolog"];

/* Fije min o max en -1 (o cualquier negativo) para evitar ese chequeo.
0  <--  En el rango esperado
1  <--  Más pequeño de lo esperado
2  <--  Más grande de lo esperado */
const checkLength = (elem, min, max) => {
    const len = elem.length;
    if (min > -1 && len < min) { return 1; }
    if (max > -1 && len > max) { return 2; }
    return 0;
};

// Retorna el índice de la primera posición donde se encuentra 'character' en la string,
// contando a partir del índice start. Si no se encuentra, retorna -1.
const findCharacter = (string, character, start = 0) => {
    const len  = string.length;
    for (let index = start; index < len; index++) {
        if (string.charAt(index) == character) { return index; }
    }
    return -1;
};

const displayPlatformUsernameBox = (platform) => {
    let check = document.getElementById("contactThrough" + platform);
    let userSection = document.getElementById("contactToggle" + platform);
    if (check.checked) {
        userSection.style.display = "inline";
    } else {
        userSection.style.display = "none";
    }
};

const dynamicUsernameBoxDisplay = () => {
    supportedContactPlatforms.forEach(displayPlatformUsernameBox);
};

// Retorna 0 para un nombre válido, 1 de lo contrario. 
// Estándar para toda la serie de funciones "handle[...]Error"
const handleNameError = () => {
    let name = document.newPetAd.contactName.value;
    let nameError = document.getElementById("contactNameErrorMessage");
    
    const nameCode = checkLength(name, 3, 200);
    if (nameCode == 1) { 
        nameError.innerHTML = "Tu nombre debe tener al menos 3 caracteres"; 
    } else if (nameCode == 2) { 
        nameError.innerHTML = "Tu nombre debe tener a lo más 200 caracteres"; 
    } else { 
        nameError.innerHTML = ""; 
        return 0;
    }
    
    /* Una observación útil:
    A priori, queremos que este campo sea obligatorio.
    Si el usuario no lo llena, JavaScript reportará el largo del elemento como 0. 
    Por lo tanto, solicitar que el campo sea requerido equivale a pedir que su largo sea al menos 1
    (o un número mayor). Dado que ya verificamos que es al menos 3, no es necesario hacer otro chequeo. 
    Este mismo principio se aplica en el resto de campos requeridos. */
    
    return 1;
};

const handleEmailError = () => {
    let email = document.newPetAd.contactEmail.value;
    let emailError = document.getElementById("contactEmailErrorMessage");
    emailError.innerHTML = ""
    
    // Largo esperado
    const emailCode = checkLength(email, 1, 100); // ¿Mínimo 1? Vea el comentario en handleNameError
    if (emailCode == 1) { 
        emailError.innerHTML = "Por favor, proporciona una dirección de correo electrónico";
    } else if (emailCode == 2) {
        emailError.innerHTML = "Tu correo debe tener a lo más 100 caracteres";
    } 
    if (emailError.innerHTML != "") { return 1; }
    
    /* Correo tiene:
    1. Al menos un caracter al inicio distinto de arroba
    2. Una arroba
    ... */
    const atPosition = findCharacter(email, '@');
    if (atPosition == 0) { 
        emailError.innerHTML = "'@' no puede ser el primer caracter de tu correo";
    } else if (atPosition == -1) { 
        emailError.innerHTML = "Tu correo no incluye el caracter '@'"; 
    }
    if (emailError.innerHTML != "") { return 1; }
    
    /* ... Correo tiene:
    3. Al menos un caracter distinto a punto después de la arroba
    4. Al menos un caracter después de dicho punto 
    ... */
    const domainPosition = findCharacter(email, '.', atPosition);
    if (domainPosition == atPosition + 1) {
        emailError.innerHTML = "Tu correo tiene un punto inmediatamente después de '@'";
    } else if (domainPosition == -1) {
        emailError.innerHTML = "Tu correo no tiene un dominio, como '.com' o '.cl'";
    }
    if (emailError.innerHTML != "") { return 1; }
    
    // ... Esto no es bajo ninguna circunstancia suficiente para verificar un correo, pero cubre varios casos sencillos.
    // Para buscar más referencias a futuro: https://en.wikipedia.org/wiki/Email_address
    
    return 0;
};

const handlePhoneError = () => {
    let phone = document.newPetAd.contactPhoneNumber.value;
    let phoneError = document.getElementById("contactPhoneNumberErrorMessage");
    phoneError.innerHTML = "";
    
    let len = phone.length;
    if (len == 0) { return 0; } // El número de teléfono es opcional
    
    if (phone.substring(0, 4) != '+569') { 
        phoneError.innerHTML = "El número de teléfono debe empezar por '+569'";
    } else if (phone.length != 12) {
        phoneError.innerHTML = "El número debe tener 11 dígitos, sin espacios entremedio";
    } else {
        for (let index = 4; index < 12; index++) {
            if (!['0','1','2','3','4','5','6','7','8','9'].includes(phone.charAt(index))) {
                phoneError.innerHTML = "El número debe tener un signo '+' seguido únicamente de caracteres numéricos";
                break;
            }
        }
    }
    if (phoneError.innerHTML != "") { return 1; }
    
    return 0;
}

const validateAdPostData = () => {
    handleNameError();
    handleEmailError();
    handlePhoneError();
};

// Esto detecta cuando se hace click en el botón de envío, y ejecuta la validación.
let submitButton = document.getElementById("sendAdPostButton");
submitButton.addEventListener("click", validateAdPostData);

// En vez de llenar el formulario del HTML con campos similares para cada red social, lo haremos con JS.
// Así, añadir o eliminar una red social es tan sencillo como añadir o eliminar su nombre del array supportedContactPlatforms.
let formPlatforms = document.getElementById("contactThroughDiv");
for (const platform of supportedContactPlatforms) {
    formPlatforms.innerHTML += '<label for="contactThrough' + platform + '">' + platform + '</label>' +
        '<input id="contactThrough' + platform + '" name="contactThrough" type="checkbox">' +
        '<div id="contactToggle' + platform + '" class=hidden>' +
            '<label for="contact' + platform + 'User">Usuario </label>' +
            '<input id="contact' + platform + 'User" name="contact' + platform + 'User" type="text" size="30">' +
        '</div> <br>';
}
formPlatforms.addEventListener("change", dynamicUsernameBoxDisplay);