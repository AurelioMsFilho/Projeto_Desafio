// console.log("Aurélio Filho");

// function soma(a: number, b: number){
// return a + b;
// }
// soma(5, 7 )

               // Types e Interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre'| 'aquatico';
}
interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}
interface IReptil extends IAnimal {
    nadar: boolean;
}

const animal: IAnimal= {
    nome: 'Elefante',
    tipo: "terrestre",

}

const felinos: IFelino={
    nome:'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
}
const reptil: IReptil={
    nome:'Jacaré',
    tipo: 'aquatico',
    nadar: true,

}

