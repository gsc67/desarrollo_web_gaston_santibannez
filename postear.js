/*  ================ 
    CONSTANTES GLOBALES
*/

const supportedContactPlatforms = ["Whatsapp", "Telegram", "X", "Instagram", "Tiktok", "Fotolog"];

// Mis más sinceras disculpas por esto: los import me lanzaban un bloqueo porque "CORS Request not HTTP",
// y no encontré que, al menos en esta fase, solucionarlo ameritara más esfuerzo que simplemente mover el código acá:
const region_comuna = {
    "regiones": [
        {
        "numero": 1, "nombre": "Región de Tarapacá",
        "comunas": [{"id": 10301, "nombre": "Camiña"}, {"id": 10302, "nombre": "Huara"}, {"id": 10303, "nombre": "Pozo Almonte"}, {"id": 10304, "nombre": "Iquique"}, {"id": 10305, "nombre": "Pica"}, {"id": 10306, "nombre": "Colchane"}, {"id": 10307, "nombre": "Alto Hospicio"}]
        },
        {
        "numero": 2, "nombre": "Región de Antofagasta",
        "comunas": [{"id": 20101, "nombre": "Tocopilla"}, {"id": 20102, "nombre": "Maria Elena"}, {"id": 20201, "nombre": "Ollague"}, {"id": 20202, "nombre": "Calama"}, {"id": 20203, "nombre": "San Pedro Atacama"}, {"id": 20301, "nombre": "Sierra Gorda"}, {"id": 20302, "nombre": "Mejillones"}, {"id": 20303, "nombre": "Antofagasta"}, {"id": 20304, "nombre": "Taltal"}]
        },
        {
        "numero": 3, "nombre": "Región de Atacama",
        "comunas": [{"id": 30101, "nombre": "Diego de Almagro"}, {"id": 30102, "nombre": "Chañaral"}, {"id": 30201, "nombre": "Caldera"}, {"id": 30202, "nombre": "Copiapo"}, {"id": 30203, "nombre": "Tierra Amarilla"}, {"id": 30301, "nombre": "Huasco"}, {"id": 30302, "nombre": "Freirina"}, {"id": 30303, "nombre": "Vallenar"}, {"id": 30304, "nombre": "Alto del Carmen"}]
        },
        {
        "numero": 4, "nombre": "Región de Coquimbo ",
        "comunas": [{"id": 40101, "nombre": "La Higuera"}, {"id": 40102, "nombre": "La Serena"}, {"id": 40103, "nombre": "Vicuña"}, {"id": 40104, "nombre": "Paihuano"}, {"id": 40105, "nombre": "Coquimbo"}, {"id": 40106, "nombre": "Andacollo"}, {"id": 40201, "nombre": "Rio Hurtado"}, {"id": 40202, "nombre": "Ovalle"}, {"id": 40203, "nombre": "Monte Patria"}, {"id": 40204, "nombre": "Punitaqui"}, {"id": 40205, "nombre": "Combarbala"}, {"id": 40301, "nombre": "Mincha"}, {"id": 40302, "nombre": "Illapel"}, {"id": 40303, "nombre": "Salamanca"}, {"id": 40304, "nombre": "Los Vilos"}]
        },
        {
        "numero": 5, "nombre": "Región de Valparaíso",
        "comunas": [{"id": 50101, "nombre": "Petorca"}, {"id": 50102, "nombre": "Cabildo"}, {"id": 50103, "nombre": "Papudo"}, {"id": 50104, "nombre": "La Ligua"}, {"id": 50105, "nombre": "Zapallar"}, {"id": 50201, "nombre": "Putaendo"}, {"id": 50202, "nombre": "Santa Maria"}, {"id": 50203, "nombre": "San Felipe"}, {"id": 50204, "nombre": "Pencahue"}, {"id": 50205, "nombre": "Catemu"}, {"id": 50206, "nombre": "Llay Llay"}, {"id": 50301, "nombre": "Nogales"}, {"id": 50302, "nombre": "La Calera"}, {"id": 50303, "nombre": "Hijuelas"}, {"id": 50304, "nombre": "La Cruz"}, {"id": 50305, "nombre": "Quillota"}, {"id": 50306, "nombre": "Olmue"}, {"id": 50307, "nombre": "Limache"}, {"id": 50401, "nombre": "Los Andes"}, {"id": 50402, "nombre": "Rinconada"}, {"id": 50403, "nombre": "Calle Larga"}, {"id": 50404, "nombre": "San Esteban"}, {"id": 50501, "nombre": "Puchuncavi"}, {"id": 50502, "nombre": "Quintero"}, {"id": 50503, "nombre": "Viña del Mar"}, {"id": 50504, "nombre": "Villa Alemana"}, {"id": 50505, "nombre": "Quilpue"}, {"id": 50506, "nombre": "Valparaiso"}, {"id": 50507, "nombre": "Juan Fernandez"}, {"id": 50508, "nombre": "Casablanca"}, {"id": 50509, "nombre": "Concon"}, {"id": 50601, "nombre": "Isla de Pascua"}, {"id": 50701, "nombre": "Algarrobo"}, {"id": 50702, "nombre": "El Quisco"}, {"id": 50703, "nombre": "El Tabo"}, {"id": 50704, "nombre": "Cartagena"}, {"id": 50705, "nombre": "San Antonio"}, {"id": 50706, "nombre": "Santo Domingo"}]
        },
        {
        "numero": 6, "nombre": "Región del Libertador Bernardo Ohiggins",
        "comunas": [{"id": 60101, "nombre": "Mostazal"}, {"id": 60102, "nombre": "Codegua"}, {"id": 60103, "nombre": "Graneros"}, {"id": 60104, "nombre": "Machali"}, {"id": 60105, "nombre": "Rancagua"}, {"id": 60106, "nombre": "Olivar"}, {"id": 60107, "nombre": "Doñihue"}, {"id": 60108, "nombre": "Requinoa"}, {"id": 60109, "nombre": "Coinco"}, {"id": 60110, "nombre": "Coltauco"}, {"id": 60111, "nombre": "Quinta Tilcoco"}, {"id": 60112, "nombre": "Las Cabras"}, {"id": 60113, "nombre": "Rengo"}, {"id": 60114, "nombre": "Peumo"}, {"id": 60115, "nombre": "Pichidegua"}, {"id": 60116, "nombre": "Malloa"}, {"id": 60117, "nombre": "San Vicente"}, {"id": 60201, "nombre": "Navidad"}, {"id": 60202, "nombre": "La Estrella"}, {"id": 60203, "nombre": "Marchigue"}, {"id": 60204, "nombre": "Pichilemu"}, {"id": 60205, "nombre": "Litueche"}, {"id": 60206, "nombre": "Paredones"}, {"id": 60301, "nombre": "San Fernando"}, {"id": 60302, "nombre": "Peralillo"}, {"id": 60303, "nombre": "Placilla"}, {"id": 60304, "nombre": "Chimbarongo"}, {"id": 60305, "nombre": "Palmilla"}, {"id": 60306, "nombre": "Nancagua"}, {"id": 60307, "nombre": "Santa Cruz"}, {"id": 60308, "nombre": "Pumanque"}, {"id": 60309, "nombre": "Chepica"}, {"id": 60310, "nombre": "Lolol"}]
        },
        {
        "numero": 7, "nombre": "Región del Maule",
        "comunas": [{"id": 70101, "nombre": "Teno"}, {"id": 70102, "nombre": "Romeral"}, {"id": 70103, "nombre": "Rauco"}, {"id": 70104, "nombre": "Curico"}, {"id": 70105, "nombre": "Sagrada Familia"}, {"id": 70106, "nombre": "Hualañe"}, {"id": 70107, "nombre": "Vichuquen"}, {"id": 70108, "nombre": "Molina"}, {"id": 70109, "nombre": "Licanten"}, {"id": 70201, "nombre": "Rio Claro"}, {"id": 70202, "nombre": "Curepto"}, {"id": 70203, "nombre": "Pelarco"}, {"id": 70204, "nombre": "Talca"}, {"id": 70205, "nombre": "Pencahue"}, {"id": 70206, "nombre": "San Clemente"}, {"id": 70207, "nombre": "Constitucion"}, {"id": 70208, "nombre": "Maule"}, {"id": 70209, "nombre": "Empedrado"}, {"id": 70210, "nombre": "San Rafael"}, {"id": 70301, "nombre": "San Javier"}, {"id": 70302, "nombre": "Colbun"}, {"id": 70303, "nombre": "Villa Alegre"}, {"id": 70304, "nombre": "Yerbas Buenas"}, {"id": 70305, "nombre": "Linares"}, {"id": 70306, "nombre": "Longavi"}, {"id": 70307, "nombre": "Retiro"}, {"id": 70308, "nombre": "Parral"}, {"id": 70401, "nombre": "Chanco"}, {"id": 70402, "nombre": "Pelluhue"}, {"id": 70403, "nombre": "Cauquenes"}]
        },
        {
        "numero": 8, "nombre": "Región del Biobío",
        "comunas": [{"id": 80201, "nombre": "Tome"}, {"id": 80202, "nombre": "Florida"}, {"id": 80203, "nombre": "Penco"}, {"id": 80204, "nombre": "Talcahuano"}, {"id": 80205, "nombre": "Concepcion"}, {"id": 80206, "nombre": "Hualqui"}, {"id": 80207, "nombre": "Coronel"}, {"id": 80208, "nombre": "Lota"}, {"id": 80209, "nombre": "Santa Juana"}, {"id": 80210, "nombre": "Chiguayante"}, {"id": 80211, "nombre": "San Pedro de la Paz"}, {"id": 80212, "nombre": "Hualpen"}, {"id": 80301, "nombre": "Cabrero"}, {"id": 80302, "nombre": "Yumbel"}, {"id": 80303, "nombre": "Tucapel"}, {"id": 80304, "nombre": "Antuco"}, {"id": 80305, "nombre": "San Rosendo"}, {"id": 80306, "nombre": "Laja"}, {"id": 80307, "nombre": "Quilleco"}, {"id": 80308, "nombre": "Los Angeles"}, {"id": 80309, "nombre": "Nacimiento"}, {"id": 80310, "nombre": "Negrete"}, {"id": 80311, "nombre": "Santa Barbara"}, {"id": 80312, "nombre": "Quilaco"}, {"id": 80313, "nombre": "Mulchen"}, {"id": 80314, "nombre": "Alto Bio Bio"}, {"id": 80401, "nombre": "Arauco"}, {"id": 80402, "nombre": "Curanilahue"}, {"id": 80403, "nombre": "Los Alamos"}, {"id": 80404, "nombre": "Lebu"}, {"id": 80405, "nombre": "Cañete"}, {"id": 80406, "nombre": "Contulmo"}, {"id": 80407, "nombre": "Tirua"}]
        },
        {
        "numero": 9, "nombre": "Región de La Araucanía",
        "comunas": [{"id": 90101, "nombre": "Renaico"}, {"id": 90102, "nombre": "Angol"}, {"id": 90103, "nombre": "Collipulli"}, {"id": 90104, "nombre": "Los Sauces"}, {"id": 90105, "nombre": "Puren"}, {"id": 90106, "nombre": "Ercilla"}, {"id": 90107, "nombre": "Lumaco"}, {"id": 90108, "nombre": "Victoria"}, {"id": 90109, "nombre": "Traiguen"}, {"id": 90110, "nombre": "Curacautin"}, {"id": 90111, "nombre": "Lonquimay"}, {"id": 90201, "nombre": "Perquenco"}, {"id": 90202, "nombre": "Galvarino"}, {"id": 90203, "nombre": "Lautaro"}, {"id": 90204, "nombre": "Vilcun"}, {"id": 90205, "nombre": "Temuco"}, {"id": 90206, "nombre": "Carahue"}, {"id": 90207, "nombre": "Melipeuco"}, {"id": 90208, "nombre": "Nueva Imperial"}, {"id": 90209, "nombre": "Puerto Saavedra"}, {"id": 90210, "nombre": "Cunco"}, {"id": 90211, "nombre": "Freire"}, {"id": 90212, "nombre": "Pitrufquen"}, {"id": 90213, "nombre": "Teodoro Schmidt"}, {"id": 90214, "nombre": "Gorbea"}, {"id": 90215, "nombre": "Pucon"}, {"id": 90216, "nombre": "Villarrica"}, {"id": 90217, "nombre": "Tolten"}, {"id": 90218, "nombre": "Curarrehue"}, {"id": 90219, "nombre": "Loncoche"}, {"id": 90220, "nombre": "Padre Las Casas"}, {"id": 90221, "nombre": "Cholchol"}]
        },
        {
        "numero": 10, "nombre": "Región de Los Lagos",
        "comunas": [{"id": 100201, "nombre": "San Pablo"}, {"id": 100202, "nombre": "San Juan"}, {"id": 100203, "nombre": "Osorno"}, {"id": 100204, "nombre": "Puyehue"}, {"id": 100205, "nombre": "Rio Negro"}, {"id": 100206, "nombre": "Purranque"}, {"id": 100207, "nombre": "Puerto Octay"}, {"id": 100301, "nombre": "Frutillar"}, {"id": 100302, "nombre": "Fresia"}, {"id": 100303, "nombre": "Llanquihue"}, {"id": 100304, "nombre": "Puerto Varas"}, {"id": 100305, "nombre": "Los Muermos"}, {"id": 100306, "nombre": "Puerto Montt"}, {"id": 100307, "nombre": "Maullin"}, {"id": 100308, "nombre": "Calbuco"}, {"id": 100309, "nombre": "Cochamo"}, {"id": 100401, "nombre": "Ancud"}, {"id": 100402, "nombre": "Quemchi"}, {"id": 100403, "nombre": "Dalcahue"}, {"id": 100404, "nombre": "Curaco de Velez"}, {"id": 100405, "nombre": "Castro"}, {"id": 100406, "nombre": "Chonchi"}, {"id": 100407, "nombre": "Queilen"}, {"id": 100408, "nombre": "Quellon"}, {"id": 100409, "nombre": "Quinchao"}, {"id": 100410, "nombre": "Puqueldon"}, {"id": 100501, "nombre": "Chaiten"}, {"id": 100502, "nombre": "Futaleufu"}, {"id": 100503, "nombre": "Palena"}, {"id": 100504, "nombre": "Hualaihue"}]
        },
        {
        "numero": 11, "nombre": "Región Aisén del General Carlos Ibáñez del Campo",
        "comunas": [{"id": 110101, "nombre": "Guaitecas"}, {"id": 110102, "nombre": "Cisnes"}, {"id": 110103, "nombre": "Aysen"}, {"id": 110201, "nombre": "Coyhaique"}, {"id": 110202, "nombre": "Lago Verde"}, {"id": 110301, "nombre": "Rio Ibañez"}, {"id": 110302, "nombre": "Chile Chico"}, {"id": 110401, "nombre": "Cochrane"}, {"id": 110402, "nombre": "Tortel"}, {"id": 110403, "nombre": "O'Higins"}]
        },
        {
        "numero": 12, "nombre": "Región de Magallanes y la Antártica Chilena",
        "comunas": [{"id": 120101, "nombre": "Torres del Paine"}, {"id": 120102, "nombre": "Puerto Natales"}, {"id": 120201, "nombre": "Laguna Blanca"}, {"id": 120202, "nombre": "San Gregorio"}, {"id": 120203, "nombre": "Rio Verde"}, {"id": 120204, "nombre": "Punta Arenas"}, {"id": 120301, "nombre": "Porvenir"}, {"id": 120302, "nombre": "Primavera"}, {"id": 120303, "nombre": "Timaukel"}, {"id": 120401, "nombre": "Antartica"}]
        },
        {
        "numero": 13, "nombre": "Región Metropolitana de Santiago ",
        "comunas": [{"id": 130101, "nombre": "Tiltil"}, {"id": 130102, "nombre": "Colina"}, {"id": 130103, "nombre": "Lampa"}, {"id": 130201, "nombre": "Conchali"}, {"id": 130202, "nombre": "Quilicura"}, {"id": 130203, "nombre": "Renca"}, {"id": 130204, "nombre": "Las Condes"}, {"id": 130205, "nombre": "Pudahuel"}, {"id": 130206, "nombre": "Quinta Normal"}, {"id": 130207, "nombre": "Providencia"}, {"id": 130208, "nombre": "Santiago"}, {"id": 130209, "nombre": "La Reina"}, {"id": 130210, "nombre": "Ñuñoa"}, {"id": 130211, "nombre": "San Miguel"}, {"id": 130212, "nombre": "Maipu"}, {"id": 130213, "nombre": "La Cisterna"}, {"id": 130214, "nombre": "La Florida"}, {"id": 130215, "nombre": "La Granja"}, {"id": 130216, "nombre": "Independencia"}, {"id": 130217, "nombre": "Huechuraba"}, {"id": 130218, "nombre": "Recoleta"}, {"id": 130219, "nombre": "Vitacura"}, {"id": 130220, "nombre": "Lo Barrenechea"}, {"id": 130221, "nombre": "Macul"}, {"id": 130222, "nombre": "Peñalolen"}, {"id": 130223, "nombre": "San Joaquin"}, {"id": 130224, "nombre": "La Pintana"}, {"id": 130225, "nombre": "San Ramon"}, {"id": 130226, "nombre": "El Bosque"}, {"id": 130227, "nombre": "Pedro Aguirre Cerda"}, {"id": 130228, "nombre": "Lo Espejo"}, {"id": 130229, "nombre": "Estacion Central"}, {"id": 130230, "nombre": "Cerrillos"}, {"id": 130231, "nombre": "Lo Prado"}, {"id": 130232, "nombre": "Cerro Navia"}, {"id": 130301, "nombre": "San Jose de Maipo"}, {"id": 130302, "nombre": "Puente Alto"}, {"id": 130303, "nombre": "Pirque"}, {"id": 130401, "nombre": "San Bernardo"}, {"id": 130402, "nombre": "Calera de Tango"}, {"id": 130403, "nombre": "Buin"}, {"id": 130404, "nombre": "Paine"}, {"id": 130501, "nombre": "Peñaflor"}, {"id": 130502, "nombre": "Talagante"}, {"id": 130503, "nombre": "El Monte"}, {"id": 130504, "nombre": "Isla de Maipo"}, {"id": 130601, "nombre": "Curacavi"}, {"id": 130602, "nombre": "Maria Pinto"}, {"id": 130603, "nombre": "Melipilla"}, {"id": 130604, "nombre": "San Pedro"}, {"id": 130605, "nombre": "Alhue"}, {"id": 130606, "nombre": "Padre Hurtado"}]
        },
        {
        "numero": 14, "nombre": "Región de Los Ríos",
        "comunas": [{"id": 100101, "nombre": "Lanco"}, {"id": 100102, "nombre": "Mariquina"}, {"id": 100103, "nombre": "Panguipulli"}, {"id": 100104, "nombre": "Mafil"}, {"id": 100105, "nombre": "Valdivia"}, {"id": 100106, "nombre": "Los Lagos"}, {"id": 100107, "nombre": "Corral"}, {"id": 100108, "nombre": "Paillaco"}, {"id": 100109, "nombre": "Futrono"}, {"id": 100110, "nombre": "Lago Ranco"}, {"id": 100111, "nombre": "La Union"}, {"id": 100112, "nombre": "Rio Bueno"}]
        },
        {
        "numero": 15, "nombre": "Región Arica y Parinacota",
        "comunas": [{"id": 10101, "nombre": "Gral. Lagos"}, {"id": 10102, "nombre": "Putre"}, {"id": 10201, "nombre": "Arica"}, {"id": 10202, "nombre": "Camarones"}]
        },
        {
        "numero": 16, "nombre": "Región del Ñuble",
        "comunas": [{"id": 80101, "nombre": "Cobquecura"}, {"id": 80102, "nombre": "Ñiquen"}, {"id": 80103, "nombre": "San Fabian"}, {"id": 80104, "nombre": "San Carlos"}, {"id": 80105, "nombre": "Quirihue"}, {"id": 80106, "nombre": "Ninhue"}, {"id": 80107, "nombre": "Trehuaco"}, {"id": 80108, "nombre": "San Nicolas"}, {"id": 80109, "nombre": "Coihueco"}, {"id": 80110, "nombre": "Chillan"}, {"id": 80111, "nombre": "Portezuelo"}, {"id": 80112, "nombre": "Pinto"}, {"id": 80113, "nombre": "Coelemu"}, {"id": 80114, "nombre": "Bulnes"}, {"id": 80115, "nombre": "San Ignacio"}, {"id": 80116, "nombre": "Ranquil"}, {"id": 80117, "nombre": "Quillon"}, {"id": 80118, "nombre": "El Carmen"}, {"id": 80119, "nombre": "Pemuco"}, {"id": 80120, "nombre": "Yungay"}, {"id": 80121, "nombre": "Chillan Viejo"}]
        }
    ]
};

// No estoy seguro de por qué la información venía así la verdad; ¿cuál es el punto de un mapa con una única llave?
// Imagino debe haber _algún_ motivo, pero lo desconozco u.u. Por eso, no modifiqué la info.
// Pero lo que realmente utilizaré es el array dentro de la llave "regiones"
const regiones = region_comuna["regiones"];

/*  ================
    MÉTODOS AUXILIARES
*/

// Fije min o max en -1 (o cualquier negativo) para evitar ese chequeo.
// 0  <--  En el rango esperado
// 1  <--  Más pequeño de lo esperado
// 2  <--  Más grande de lo esperado
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

/*  ================
    ERROR HANDLERS
*/

// En general, esta serie de métodos cumple:
// Retorna 0 para una entrada válida, 1 de lo contrario. 
const handleCommuneError = () => {
    let regionError = document.getElementById("petRegionErrorMessage");
    let comunaError = document.getElementById("petComunaErrorMessage");
    regionError.innerHTML = "";
    comunaError.innerHTML = "";
    
    if (document.getElementById("petRegion").value == null) {
        regionError.innerHTML = "Especifique la región, por favor";
    }
    
    if (document.getElementById("petComuna").value == null) {
        comunaError.innerHTML = "Especifique la comuna, por favor";
    }
    
    if (regionError.innerHTML == "" && comunaError.innerHTML == "") { return 0; }
    else { return 1; }
};

const handleSectorError = () => {
    let sectorError = document.getElementById("sectorErrorMessage");
    if (checkLength(document.getElementById("petSector").value, -1, 100)) {
        sectorError.innerHTML = "Escriba el sector con a lo más 100 caracteres, por favor";
        return 1;
    }
    else {
        sectorError.innerHTML = "";
        return 0;
    }
};

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

const handlePlatformsError = () => {
    let checkNum = 0;
    let output = 0;
    
    for (const platform of supportedContactPlatforms) {
        let platformCheck = document.getElementById("contactThrough" + platform);
        let platformError = document.getElementById("contact" + platform + "ErrorMessage");
        const platformUser = document.getElementById("contact" + platform + "User");
        const platformCode = checkLength(platformUser.value, 4, 50);
        
        platformError.innerHTML = "";
        
        if (platformCheck.checked) { // Opcional, pero si lo marca, _debe_ proveer la información
            checkNum += 1;
            if (checkNum > 5) { // máximo 5
                platformError.innerHTML = "Ingresa a lo más 5 plataformas, por favor";
            } else if (platformCode == 1) {
                platformError.innerHTML = "Tu identificación de " + platform + " debe tener al menos 4 caracteres"
            } else if (platformCode == 2) {
                platformError.innerHTML = "Tu identificación de " + platform + " debe tener a lo más 50 caracteres"
            }
            if (platformError.innerHTML != "") { output = 1; }
        }
    }
    
    return output;
};

/*  ================
    PROCEDURAL HTML GENERATION
*/

// En vez de llenar el formulario del HTML con campos similares para cada red social, lo haremos con JavaScript.
// Así, añadir o eliminar una red social es tan sencillo como añadir o eliminar su nombre del array supportedContactPlatforms.
const generateSocialMediaOptions = () => {
    const formPlatforms = document.getElementById("contactThroughDiv");
    for (const platform of supportedContactPlatforms) {
        formPlatforms.innerHTML += 
        '<table> <colgroup> ' +
            '<col style="width: 15em;"> <col style="width: 3em;"> <col style="width: 7em;"> ' +
        '</colgroup> <tr> ' + 
            '<td> <label for="contactThrough' + platform + '">' + platform + '</label> </td> ' +
            '<td> <input id="contactThrough' + platform + '" name="contactThrough" type="checkbox"> </td> ' +
            '<td> <label id="contact' + platform + 'UserLabel" for="contact' + platform + 'User" class=hidden>Usuario:</label> </td> ' +
            '<td> <input id="contact' + platform + 'User" name="contact' + platform + 'User" type="text" size="30" class=hidden> </td> ' +
        '</tr> <tr> ' + 
            '<td> </td> <td> </td> <td> </td> ' +
            '<td> <p id="contact' + platform + 'ErrorMessage" class=error></p> </td> ' +
        '</tr> </table>';
    }
};

const generateRegionOptions = () => {
    const formRegiones = document.getElementById("petRegion");
    for (const dictRegion of regiones) {
        const region = dictRegion["nombre"];
        formRegiones.innerHTML += '<option value="' + region + '">' + region + '</option>';
    }
};

/*  ================
    DYNAMIC ELEMENT DISPLAY
*/

const displayPlatformUsernameBox = (platform) => {
    const label = document.getElementById("contact" + platform + "UserLabel");
    const username = document.getElementById("contact" + platform + "User");
    const error = document.getElementById("contact" + platform + "ErrorMessage");
    
    if (document.getElementById("contactThrough" + platform).checked) {
        label.style.display = "inline";
        username.style.display = "inline";
        error.style.display = "inline";
    } else {
        label.style.display = "none";
        username.style.display = "none";
        error.style.display = "none";
    }
};

const dynamicUsernameBoxDisplay = () => {
    supportedContactPlatforms.forEach(displayPlatformUsernameBox);
};

const dynamicRegionDisplay = () => {
    const region = document.getElementById("petRegion");
    const formComunas = document.getElementById("petComuna");
    formComunas.innerHTML = "";
    
    for (const dictRegion of regiones) {
        if (dictRegion["nombre"] == region.value) {
            const comunas = dictRegion["comunas"];
            for (const dictComuna of comunas) {
                const comuna = dictComuna["nombre"];
                formComunas.innerHTML += '<option value="' + comuna + '">' + comuna + '</option>';
            }
            break;
        }
    }
};

/*  ================ 
    MAIN SCRIPT
*/

// Función validadora del formulario
const validateAdPostData = () => {
    handleCommuneError();
    handleSectorError();
    handleNameError();
    handleEmailError();
    handlePhoneError();
    handlePlatformsError();
};

// Generación del archivo HTML
generateSocialMediaOptions();
generateRegionOptions();

// Event listeners

// Esto detecta cuando se hace click en el botón de envío, y ejecuta la validación.
document.getElementById("sendButton").addEventListener("click", validateAdPostData);
// Esto detecta cuando se hace click en una de las checkboxs de redes sociales, y hace (des)aparecer la caja de username
document.getElementById("contactThroughDiv").addEventListener("change", dynamicUsernameBoxDisplay);
// Esto detecta cuando el usuario cambia la región, para cambiar de forma acorde la lista de comunas posibles
document.getElementById("petRegion").addEventListener("change", dynamicRegionDisplay);

// Valores predeterminados

document.getElementById("petRegion").value = "Región del Ñuble";
dynamicRegionDisplay();
document.getElementById("petComuna").value = "El Carmen";