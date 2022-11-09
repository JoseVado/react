

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3] = personajes;

console.log(p3);


const retornaArreglo = () => ['ABC', 123];

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

// el primer valor del arreglo se llamara nombre
// se llamará setNombre
const state = (valor) => [valor, () => { console.log('Hola mundo') }];

const [nombre, setNombre] = state('Goku');

console.log(nombre);
setNombre();