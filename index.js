function $(x){
    return document.getElementById(x)
}

let x = ''

window.addEventListener('deviceorientation', function(event) {
    x = Math.floor(event.gamma)

    if (x <= -76 && x >= -91 || x >= 75 && x <= 91){
        $('images').removeClass()
        $('images').classList.add('teammate')
        // $('images').style.backgroundImage =  "url('./careworker.png')"
    }
    else if ( x <= -1 && event.gamma >= -75  ){
        $('images').removeClass()
        $('images').classList.add('careworker')
        // $('images').style.backgroundImage =  "url('confidant.png')"
    }
    else{
        $('images').removeClass()
        $('images').classList.add('confidant')
        // $('images').style.backgroundImage =  "url('teammate.png')"
    }
  });


