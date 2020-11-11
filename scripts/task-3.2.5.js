var temperature = 30;

checkTemperate(temperature);
temperature = 50;
checkTemperate(temperature);
temperature = 51;
checkTemperate(temperature);
temperature = 99;
checkTemperate(temperature);
temperature = 29;
checkTemperate(temperature);
temperature = 33;
checkTemperate(temperature);
temperature = -4;
checkTemperate(temperature);

function checkTemperate() {

    document.write('Hello, the temperature is ' + temperature)

    if (temperature >= 50) {
        document.write('Just pants and vest! THE TEMPERATURE IS ' + temperature + '!!!');

    } else if (temperature < 0) {
        document.write('Stay indside! THE TEMPERATURE IS ' + temperature + '!!!');

    } else if (temperature < 30) {
        document.write('Put on a coat and hat! THE TEMPERATURE IS ' + temperature + '!!!');


    } else if (temperature < 50) {
        document.write('Put on a coat! THE TEMPERATURE IS ' + temperature + '!!!');

    } else
        document.write('There is a problem!!! THE TEMPERATURE IS ' + temperature + '!!!');
}