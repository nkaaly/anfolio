function typeEffect(element, speed){
    var text = element.innerHTML;
    element.innerHTML = "";

    var i = 0;
    var timer = setInterval(function(){
        if (i < text.length ) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

var speed = 55;
var p = document.querySelector('p');


 typeEffect(p, speed);  
