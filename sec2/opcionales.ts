const opcionales = (nombre:string, apellido:string, edad?:number) => {
    console.log(`se llama ${nombre} - ${apellido} - ${edad} `);
    // edad es undefined cuando no se envia como parametro
}

opcionales('Borys', 'Lopez');