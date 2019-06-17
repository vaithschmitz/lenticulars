function $(x){
    return document.getElementById(x)
}

let x = ''

window.addEventListener('deviceorientation', function(event) {
    x = Math.floor(event.gamma)

    if (x <= -76 && x >= -91 || x >= 75 && x <= 91){
        $('images').textContent =  Math.floor(event.gamma)
        $('images').style.backgroundImage =  "url('./careworker.png')"
    }
    else if ( x <= -1 && event.gamma >= -75  ){
        $('images').textContent =  Math.floor(event.gamma)
        $('images').style.backgroundImage =  "url('confidant.png')"
    }
    else{
        $('images').textContent =  Math.floor(event.gamma)
        $('images').style.backgroundImage =  "url('teammate.png')"
    }
  });


