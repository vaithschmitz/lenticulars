function $(x){
    return document.getElementById(x)
}



let accelerometer = new Accelerometer({frequency: 60});

accelerometer.addEventListener('reading', e => {
    
    console.log(accelerometer.x)
});
accelerometer.start();

// $('images').textContent = accelerometer.x


window.addEventListener('devicemotion', function(event) {
    $('images').textContent = event.acceleration.x ;
  });