function $(x){
    return document.getElementById(x)
}

$('images').style.backgroundColor = 'orange'


let accelerometer = new Accelerometer({frequency: 60});

accelerometer.addEventListener('reading', e => {
    $('images').textContent = accelerometer.x
});
accelerometer.start();