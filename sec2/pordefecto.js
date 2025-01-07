var mostrar = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 25; }
    return "se llama ".concat(nombre, " - ").concat(apellido, " y tiene ").concat(edad, ".");
};
console.log(mostrar('Borys', 'Lopez'));
console.log(mostrar('Borys', 'Lopez', 35));
