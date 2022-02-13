function generatepin() {
    const pin = Math.round(Math.random() * 10000);
    // console.log(pin);
    if (pin / 1000 >= 1) {
        document.getElementById('show-random').value = pin;
    }
    else
        generatepin();

}

document.getElementById('key-pad').addEventListener('click', function (event) {

    const number = event.target.innerText;
    const calInput = document.getElementById('type-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calInput.value = '';
        }
        if (number == '<') {
            calInput.value = Math.floor(parseFloat(calInput.value) / 10);
        }
    }
    else {

        const preValue = calInput.value;
        const newval = preValue + number;
        calInput.value = newval;
    }

})

function veryfyPin() {
    const calInput = document.getElementById('type-numbers').value;
    const pin = document.getElementById('show-random').value;
    if (calInput == pin) {
        document.getElementById('notify-success').style.display = 'block';
        document.getElementById('notify-fail').style.display = 'none';
    }
    else {
        document.getElementById('notify-fail').style.display = 'block';
        document.getElementById('notify-success').style.display = 'none';
        document.getElementById('chance').innerText--;
        if (document.getElementById('chance').innerText == 0) {
            document.getElementById('avtive').style.display = 'none';
        }
    }



}