function $(x){
    return document.getElementById(x)
}

let x = ''

window.addEventListener('deviceorientation', function(event) {

    $('images').textContent =  event.gamma
    if (event.gamma >= 0){
        $('images').style.backgroundImage =  url('./carers-2.jpg')
    }
    else{
        $('images').style.backgroundImage =  url('./carers-1.jpg')
    }
  });


