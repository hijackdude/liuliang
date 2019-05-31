$(document).ready( function () {

    var amount, percent, result;
    var calculator = $('.calculator');
    var calculatorBill = calculator.find('.calculator__bill');
    var calculatorTip = calculator.find('.calculator__tip');
    var calculatorTip2 = calculator.find('.calculator__tip2');
    var calculatorResult = calculator.find('.calculator__result');
    var billamount = calculator.find('.bill-amount');
    var tipAmount = calculator.find('.tip-amount');
    var tipAmount2 = calculator.find('.tip2-amount');

    $(window).on('DOMContentLoaded', function () {
        billamount.text(calculatorBill.val())
        tipAmount.text( calculatorTip.val() );
        tipAmount2.text( calculatorTip2.val() );
        amount = calculatorBill.val() * 1;
        percent = calculatorTip.val() * 1;
        percent2 = calculatorTip2.val() * 1;
        result = amount + amount * ( percent / 100 ) + percent2;
        calculatorResult.text( result.toFixed(2)  );
    });

    calculatorBill.on('change', function () {

        if ( calculatorBill.val() === '' || isNaN( calculatorBill.val() ) ) {
            alert('')
        } else {
            amount = calculatorBill.val() * 1;
        }
        billamount.text( calculatorBill.val());
        amount = calculatorBill.val() * 1;
        percent = calculatorTip.val() * 1;
        percent2 = calculatorTip2.val() * 1;
        result = amount * 0.015 + percent * 0.02 + percent2 *0.03;
        calculatorResult.text( result.toFixed(2)  );
    });


    calculatorTip2.on('change', function () {

    if ( calculatorBill.val() === '' || isNaN( calculatorBill.val() ) ) {
        alert('')
    } else {
        amount = calculatorBill.val() * 1;
    }

    tipAmount2.text( calculatorTip2.val());
    percent2 = calculatorTip2.val() * 1;
    result = amount * 0.015 + percent * 0.02 + percent2 *0.03;
    calculatorResult.text( result.toFixed(2) );
});


    calculatorTip.on('change', function () {

        if ( calculatorBill.val() === '' || isNaN( calculatorBill.val() ) ) {
            alert('')
        } else {
            amount = calculatorBill.val() * 1;
        }

        tipAmount.text( calculatorTip.val());
        percent = calculatorTip.val() * 1;
        result = amount * 0.015 + percent * 0.02 + percent2 *0.03;
        calculatorResult.text( result.toFixed(2) );
    });

});
