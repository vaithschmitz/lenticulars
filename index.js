function $(x){
    return document.getElementById(x)
}

let x = ''

window.addEventListener('deviceorientation', function(event) {

    if (event.gamma >= 0){
        $('images').textContent =  event.gamma % 2
        $('images').style.backgroundImage =  "url('./careworker.png')"
    }
    else{
        $('images').textContent =  event.gamma % 2
        $('images').style.backgroundImage =  "url('confidant.png')"
    }
  });


