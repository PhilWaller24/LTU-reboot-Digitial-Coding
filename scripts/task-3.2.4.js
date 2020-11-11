var temperature = 30;

checkTemperate(temperature);
temperature = 50;
checkTemperate(temperature);
temperature = 51;
checkTemperate(temperature);
temperature = 99;

function checkTemperate() {

    document.write('The temperature is ' + temperature)

    if (temperature < 50) {
        document.write('Put on a coat! THE TEMPERATURE IS ' + temperature + '!!!');
    }

}