function $(x){
    return document.getElementById(x)
}

let x = ''

window.addEventListener('deviceorientation', function(event) {

    // $('images').textContent =  event.gamma
    if (event.gamma >= 0){
        $('images').textContent =  "HELLLO"
        $('images').style.backgroundImage =  "url('./careworker.png') center center no-repeat;"
    }
    else{
        $('images').textContent =  "Goodbye"
        $('images').style.backgroundImage =  "url('confidant.png') center center no-repeat;"
    }
  });


