// input
let feet = document.getElementById('input-feet')

// output
let inches = document.getElementById('output-inches')
let meter = document.getElementById('output-meter')
let yard = document.getElementById('output-yard')


// onclick
function convert () {
    inches.innerHTML = `${parseFloat(feet.value) * 12} inches`;
    meter.innerHTML = `${parseFloat(feet.value) * 0.3408} m`;
    yard.innerHTML = `${parseFloat(feet.value) * 0.33} yd`;
}





