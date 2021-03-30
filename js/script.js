//bottone calculate
var genButton = document.getElementById('gen-button');
genButton.addEventListener('click', function() {

    //operazioni al click

    var userName = document.getElementById('generator-nome-cognome').value;
    console.log(userName);

    var kmPercorrere = document.getElementById('generator-km').value;
    kmPercorrere = parseFloat(kmPercorrere);
    console.log(kmPercorrere);

    //offerta
    var genUserAge = document.getElementById('generator-eta');
    var userAge = genUserAge.value;
    console.log(userAge);
    var userOffer = 'Prezzo Standard';

    // prezzo biglietto
    var prezzoBiglietto = kmPercorrere * 0.21; 
    console.log(prezzoBiglietto);

    var percent;
    console.log(percent);

    if ( userAge == 'minorenne' ) {
        percent = ( prezzoBiglietto *  20 ) / 100;
        prezzoBiglietto = prezzoBiglietto - percent;
        userOffer = 'Sconto Minorenne';
    } else if ( userAge == 'over' ) {
        percent = ( prezzoBiglietto *  40 ) / 100;
        prezzoBiglietto = prezzoBiglietto - percent;
        userOffer = 'Sconto Over';
    }

    //carrozza
    var numeroCarrozza = Math.floor(Math.random() * 15) +1;
    console.log(numeroCarrozza);

    //codice
    var numeroCodice = Math.floor(Math.random() * 10000) +1;
    console.log(numeroCodice);

    //stampare
    document.getElementById('result-user').innerHTML = userName;
    document.getElementById('result-offer').innerHTML = userOffer;
    document.getElementById('result-carrozza').innerHTML = numeroCarrozza;
    document.getElementById('result-codice').innerHTML = numeroCodice;
    document.getElementById('prezzo').innerHTML = prezzoBiglietto.toFixed(2);

});
