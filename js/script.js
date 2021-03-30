var discountCodes = ['123456', '456789', '123789'];
console.log(discountCodes);

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

        if ( thisCheck.checked == true ) {
            var prezzoAddon = parseInt(thisCheck.value);
            console.log( i, prezzoAddon );
            prezzoBaseBurger = prezzoBaseBurger + prezzoAddon;
        }     
    }

    var discountUtente = document.getElementById('coupon').value;
    console.log(discountUtente);
    if ( discountCodes.includes(discountUtente) ) {
        var percent = prezzoBaseBurger * 0.2;
        prezzoBaseBurger = prezzoBaseBurger - percent;
    }

    console.log(prezzoBaseBurger);

    //stampare
    document.getElementById('final-price').innerHTML = prezzoBaseBurger;

});
