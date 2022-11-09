//desestructuración
//asignación destructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado',
};

//const { nombre, edad, clave } = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);


const context = ({clave, nombre, edad, rango = 'Capitan'}) => {
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.123412,
            lng: -52.342542,
        }
    }
}

const { nombreClave, anios, latlng:{lat, lng} } = context(persona);

console.log(nombreClave, anios);
console.log(lat, lng);