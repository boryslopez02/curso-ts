function sumar(a:number, b:number):number {
    return a + b;
}

const suma:number = sumar(2,2);

console.log(suma)

function mostrar(a:string):void {
    console.log(a)
}

const mostrar2 = (b:string):void => {
    console.log(b)
}

mostrar("test");
mostrar2("test 02");