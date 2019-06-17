function $(x){
    return document.getElementById(x)
}

window.addEventListener('deviceorientation', function(event) {

    $('images').textContent =  event.beta
  });