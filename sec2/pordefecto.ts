const mostrar = (nombre: string, apellido: string, edad:number = 25) => {
    return `se llama ${nombre} - ${apellido} y tiene ${edad}.`;
}

console.log(mostrar('Borys', 'Lopez'));
console.log(mostrar('Borys', 'Lopez', 35));