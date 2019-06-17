function $(x){
    return document.getElementById(x)
}

let x = ''

window.addEventListener('deviceorientation', function(event) {

    if (event.gamma >= 0){
        $('images').textContent =  Math.floor(event.gamma)
        $('images').style.backgroundImage =  "url('./careworker.png')"
    }
    else{
        $('images').textContent =  Math.floor(event.gamma)
        $('images').style.backgroundImage =  "url('confidant.png')"
    }
  });


