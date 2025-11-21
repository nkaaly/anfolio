const cursor = document.querySelector('.cursor');
const cursorItem = document.querySelectorAll('.cursorItem');

var posX = 0,
posY = 0,
mouseX = 0,
mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(cursor, {
            css: {
                left: posX - 15, 
                top: posY -15
            }
        }); 
    }
});

document.addEventListener('mousemove', (e) => {
     mouseX = e.clientX;
    mouseY = e.clientY; 
}); 

cursorItem.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        follower.classList.add('active');
    });

    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        follower.classList.remove('active');
    });
})

