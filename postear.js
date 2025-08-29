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

// Retorna 0 para un nombre válido, 1 de lo contrario.
const handleNameError = () => {
    let     name        = document.newPetAd.contactName.value;
    let     nameError   = document.getElementById("contactNameErrorMessage");
    const   nameCode    = checkLength(name, 3, 200);
    
    if (nameCode == 1) {        nameError.innerHTML = "Tu nombre debe tener al menos 3 caracteres"; } 
    else if (nameCode == 2) {   nameError.innerHTML = "Tu nombre debe tener a lo más 200 caracteres"; } 
    else {                      nameError.innerHTML = ""; return 0 }
    
    return 1;
};

const validateAdPostData = () => {
     if (handleNameError()) { return; }
};

// Esto detecta cuando se hace click en el botón de envío, y ejecuta la validación.
let submitButton = document.getElementById("sendAdPostButton");
submitButton.addEventListener("click", validateAdPostData);