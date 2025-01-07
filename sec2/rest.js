var cartapostres = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("el postre es ".concat(postre, " y las frutas ").concat(frutas, "."));
};
cartapostres('Pie de limon', 'Tarta', 'Helado', 'Piña colada');
