// input
let feet = document.getElementById('input-feet')

// output
let inches = document.getElementById('output-inches')
let meter = document.getElementById('output-meter')
let yard = document.getElementById('output-yard')
let labels = document.getElementsByClassName('conversion')

// onclick
function convert () {
    inches.innerHTML = `${(feet.value * 12).toFixed(2)} in`;
    meter.innerHTML = `${(feet.value * 0.3408).toFixed(2)} m`;
    yard.innerHTML = `${(feet.value * 0.33).toFixed(2)} yd`;
    
    // inches.style.boxShadow = '2px 0px 2px'
    // meter.style.boxShadow = '2px 0px 2px'
    // yard.style.boxShadow = '2px 0px 2px'

    for (let label of labels) {
        label.style.boxShadow = "2px 0px 2px"
    }
}

// onclick
function reset() {
    feet.value = 0;
    inches.innerHTML = "0.00 in";
    meter.innerHTML = "0.00 m";
    yard.innerHTML = "0.00 yd";

    for (let label of labels) {
        label.style.boxShadow = "none";
    }

}




