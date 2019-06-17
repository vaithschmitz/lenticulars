function $(x){
    return document.getElementById(x)
}

let x = ''

window.addEventListener('deviceorientation', function(event) {
    x = Math.floor(event.gamma)
    y = Math.floor(event.beta)

    if (x <= -76 && x >= -91 || x >= 75 && x <= 91) vertical{
        $('images').classList.remove('careworker')
        $('images').classList.remove('confidant')
        $('images').classList.add('teammate')
        $('images').textContent = y
    }
    else if ( x <= -1 && event.gamma >= -75  ){
        $('images').classList.remove('teammate')
        $('images').classList.remove('confidant')
        $('images').classList.add('careworker')
        $('images').textContent = y
    }
    else{
        $('images').classList.remove('teammate')
        $('images').classList.remove('careworker')
        $('images').classList.add('confidant')
        $('images').textContent = y

    }
  });


