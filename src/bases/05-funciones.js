const saludar =  function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = nombre => `Hola ${nombre}`;


console.log(saludar('Goku'));

console.log(saludar2('Vegueta'));

const getUser = () => {
    return {
        uid: 'ABCD213',
        username: 'El_Papi14'
    }
}

console.log(getUser());

//Transformar a funcion flecha
//retornar objeto implicito
//pruebas

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABD910',
        username: nombre,
    }
}

const getUsuarioActivo2 = nombre => ({
    uid: 'ABD910',
    username: nombre,
})

const usuarioActivo = getUsuarioActivo('Eduardo');

console.log(usuarioActivo);

console.log(getUsuarioActivo2('Vado'));