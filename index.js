function $(x){
    return document.getElementById(x)
}

window.addEventListener('deviceorientation', function(event) {
    console.log(event.alpha + ' : ' + event.beta + ' : ' + event.gamma);
    $('images').textContent =  event.alpha
  });