let carousels = document.getElementsByClassName('image-carousel');

[].forEach(carousels, function(c) {
    let next = c.getElementByClassName('next')[0];
    let prev = c.getElementByClassName('prev')[0];
    let bubb = c.getElementByClassName('bubbles')[0];
    let innr = c.getElementByClassName('inner')[0];
    let imgs = c.getElementsByTagName('img');

    next.addEventListener('click', function() {

    })
});