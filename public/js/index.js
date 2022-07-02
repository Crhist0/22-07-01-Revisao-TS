"use strict";
// Tipos Primitivos
// string
// number
// boolean
// null
// undefined
// truthy = 1 | true | '0' | []
// falsy  = undefined | null | false | 0 | ''
// const x = undefined
// let y = null
// var z: string | number = 'string 1'
// const w = 0
// const a = true
// z = 1
// Tipo complexo: Object
// no JavaScript, um objeto é uma coleção de propriedades, 
// em que cada propriedade é definida por um par 'chave: valor'.
const myDog = {
    nome: "Bread Pitt",
    idade: 8,
    estaComFome: true,
    raca: undefined,
    brabo: false,
    carente: true,
    pais: [
        { nome: 'crhistian' },
        { nome: 'clarissa' }
    ],
    bolas: {}
};
// console.log(myDog);
// Para acessar uma propriedade de um objeto, você pode usar:
//      A notação de ponto (  .  )
//      A notação tipo array (  [ ]  ). (colchetes)
// console.log(myDog.pais.pai);
// console.log(myDog["pais"]['pai']);
// if (!myDog.estaComFome) {
//     console.log("não tá com fome");
// } else {
//     console.log("tá com fome");
// }
// const x = { chave: 'valor'}
// console.log(Object.keys(myDog));
// Array
// no JavaScript, um array é uma lista ordenada de valores. 
// Cada valor é um elemento, especificado pelo seu index, ou seja, 
// sua posição nessa lista ordenada.
// javascript é uma linguagem de index 0
// string[] 
// Array<string>
//      Pode conter valores de tipos mistos 
// const arrayMisto = [
//     1,
//     null,
//     undefined,
//     false,
//     {},
//     [],
//     {chave: 'valor'},
//     [{chave:'valor'}, 1]
// ]
//       o tamanho de um array é dinamico, 
//       não é necessário especificar antecipadamente
const dogs = [
    'Bread Pitt',
    'Bartolomeu',
    'Lola',
    'Ralph',
    'Bold',
    'Nina',
    'Zack',
    'Billy',
    'Hugo'
];
// Para acessar um elemento em um array, você precisa especificar 
// um index dentro dos 'brackets' []
// console.log(myDog.pais[0]['nome']);
// console.log(myDog.pais[1].nome);
dogs.push('Pakita'); // adiciona no final do array e retorna o length
// console.log(dogs[dogs.length-1]);
const cachorroErrado = dogs.pop(); // remove do final do array e retorna o elemento removido | undefined
// console.log(dogs);
// console.log(cachorroErrado);
dogs.unshift(cachorroErrado); // adiciona no início do array e retorna o length
// console.log(dogs); 
dogs.shift(); // remove do início do array e retorna o elemento removido | undefined
// console.log(dogs);
// Para alterar um elemento no array você pode substituir pelo seu index
// ou com o método splice
// dogs[2] = 'Lola Pakita'
dogs.splice(2, 1, 'Lola Pakita');
// console.log(dogs);
// encontrar algo em um array  - indexOf, includes, find
const indexDoCachorro = dogs.indexOf('Bolinha');
// console.log(indexDoCachorro);
const boleanoDoCachorro = dogs.includes('Zack1');
// console.log(boleanoDoCachorro);
// if (dogs.includes("Zack1")) {
//     console.log('sim, está incluso');
// } else {
//     console.log('não está incluso :(');
// }
// console.log(dogs.find(cachorro=> cachorro === 'Bolinha' ));
const user = {
    nome: 'crhistian',
    adresses: [
        {
            rua: 'rua x',
            numero: 15,
            cidade: 'curitiba',
            estado: 'parana',
        },
        {
            rua: 'rua da praia',
            numero: 50,
            cidade: 'torres',
            estado: 'rio grande do sul',
        },
        {
            rua: 'rua do queijo',
            numero: 60,
            cidade: 'juiz de fora',
            estado: 'Minas Gerais',
        },
        {
            rua: 'rua do pão de queijo',
            numero: 800,
            cidade: 'juiz de dentro',
            estado: 'Minas Gerais',
        },
    ]
};
// console.log(
//     myDog.pais.find(pai=>pai.nome === "crhistian 1")
// );
// pais: [
//     {nome: 'crhistian'},
//     {nome: 'clarissa'}
// ],
// console.log(
//     user.adresses.find(adress=>adress.estado.toLowerCase() === 'minas gerais')
// );
// mais métodos de percorrer array - map, filter
// const filteredAdresses = user.adresses.filter(adresss=> adresss.numero >100)
// const filteredAdresses = user.adresses.filter((adresss,index)=> {
//     console.log('estou passando pelo index ' + index );
//     return adresss.numero >100
// })
// filteredAdresses.push({ 
//     rua: 'rua do pão de queijo',
//     numero: 800,
//     cidade: 'juiz de dentro' ,
//     estado: 'Minas Gerais',
//  })
// console.log(filteredAdresses);
// const ruas =  user.adresses.filter(adress=>adress.numero < 100).map((adress, index)=>{
//     return 'endereço número ' + (index+1)
// })
// console.log(ruas);
// copiar array: spread, slice
// const enderecos = user.adresses // NÃO É CÓPIA, é referência
// console.log(enderecos);
// enderecos[0].cidade = 'Campo Magro'
// console.log(enderecos);
// console.log(user.adresses);
const enderecos1 = [...user.adresses]; // copia o objeto
const enderecos2 = user.adresses.slice(); // copia o objeto
// console.log(enderecos);
// enderecos[0].cidade = 'Campo Magro'
// console.log(enderecos);
// console.log(user.adresses); 
// somar arrays - concat, spread
const arraysConcatenados = [...enderecos1, ...dogs];
// console.log(enderecos1.concat(dogs));
// console.log(arraysConcatenados);
// Laços de repetição 
// FOR
for (let index = 0; index < dogs.length; index++) {
    const dog = dogs[index];
    // console.log(dog);
}
// FOR OF
let index = 0;
for (const adress of dogs) {
    // console.log(dogs[index]);
    index++;
}
for (const adress of user.adresses) {
    // console.log(adress.cidade);
}
// FOR EACH
user.adresses.forEach(adress => {
    // console.log(adress.cidade);
});
// FOR IN
for (const key in myDog) {
    // console.log(key);
}
function LogaNome({ nome }) {
    console.log(nome);
}
LogaNome({ nome: "Crhistian" });
function LogaBixo(props) {
    console.log(`O animal de nome ${props.nome} tem ${props.idade} anos`);
}
LogaBixo({ nome: "Bread Pitt", idade: 8 });
// function RetornaTitulo(props:RetornaTituloProps):HTMLElement {
//     const title = document.createElement('h1')
//     title.innerText = props.titulo
//     return title
// }
function RetornaTitulo() {
    const title = document.createElement('h1');
    title.innerText = document.getElementById('input').value;
    document.getElementById('body')?.appendChild(title);
}
document.getElementById('button').addEventListener('mouseout', RetornaTitulo);
// const titulo = RetornaTitulo({titulo: 'Revisão de React'})
// document.getElementById('but')
// tipos de evento
// https://data-flair.training/blogs/javascript-event-types/
