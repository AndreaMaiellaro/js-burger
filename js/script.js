//bottone calculate
var calcButton = document.getElementById('btn-calc');
calcButton.addEventListener('click', function() {

    var prezzoBaseBurger = 50;
    
    var addonCheck = document.getElementsByClassName('addon');
    console.log(addonCheck);
    for( var i = 0; i < addonCheck.length; i++) {
        var thisCheck = addonCheck[i];
        console.log( i, thisCheck.checked);
        console.log( i, thisCheck.value);
    }


    //stampare
    //document.getElementById('price').innerHTML = prezzoBiglietto.toFixed(2);

});
