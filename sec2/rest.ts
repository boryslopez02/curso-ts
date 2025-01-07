const cartapostres = (postre:string, ...frutas:string[]):void => {
    console.log(`el postre es ${postre} y las frutas ${frutas}.`);
}

cartapostres('Pie de limon', 'Tarta', 'Helado', 'Piña colada');