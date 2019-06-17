function $(x){
    return document.getElementById(x)
}



let accelerometer = new Accelerometer({frequency: 60});

accelerometer.addEventListener('reading', e => {
    
    console.log(accelerometer.x)
});
accelerometer.start();

// $('images').textContent = accelerometer.x


// window.addEventListener('devicemotion', function(event) {
//     $('images').innerHTML = event.acceleration.x ;
//   });



window.addEventListener('deviceorientation', function(eventData) {
    // gamma is the left-to-right tilt in degrees
    console.log(eventData.gamma);

    // beta is the front-to-back tilt in degrees
    $('images1').innerHTML = eventData.beta

    // alpha is the compass direction the device is facing in degrees
    $('images').innerHTML = eventData.alpha
}, false);
