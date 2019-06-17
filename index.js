function $(x){
    return document.getElementById(x)
}

let x = ''

window.addEventListener('deviceorientation', function(event) {

    if (event.gamma >= 73 && event.gamma <= 89 ){
        $('images').textContent =  Math.floor(event.gamma)
        $('images').style.backgroundImage =  "url('./careworker.png')"
    }
    else if ( event.gamma >= 45 && event.gamma <= 72 ){
        $('images').textContent =  Math.floor(event.gamma)
        $('images').style.backgroundImage =  "url('confidant.png')"
    }
    else{
        $('images').textContent =  Math.floor(event.gamma)
        $('images').style.backgroundImage =  "url('teammate.png')"
    }
  });


