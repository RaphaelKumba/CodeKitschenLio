window.onload = function() {
    const track = document.getElementById("image-track")

    window.onmousedown = e => {
        track.dataset.mouseDownAt = e.clientX;
    }

    window.onmouseup = () => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
    }

    window.onmousemove = e => {
        if (track.dataset.mouseDownAt === '0') return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth/4;

        let percentage = (mouseDelta / maxDelta) * -100,
            nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
        if (nextPercentage > 0) nextPercentage = 0;
        if (nextPercentage < -100) nextPercentage = -100;

        track.dataset.percentage = nextPercentage;

        track.style.transform = `translate(${nextPercentage}%, 0%)`;

        track.animate({
            transform: `translate(${nextPercentage}%, 0%)`
        }, { duration: 1200, fill: "forwards" });

        for (const fotos of track.getElementsByClassName("fotos")) {
            fotos.style.objectPosition = `${nextPercentage + 100}% 0%`;
            fotos.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }
    }



    let carousels = document.getElementsByClassName('image-carousel');

    [].forEach.call(carousels, function(c) {
        let next = c.getElementsByClassName('next')[0],
            prev = c.getElementsByClassName('prev')[0],
            bubbles = c.getElementsByClassName('bubbles')[0],
            inner = c.getElementsByClassName('inner')[0],
            imgs = c.getElementsByTagName('img'),
            currentImageindex = 0,
            width = 640;

        function switchImg() {
            inner.style.left = -width * currentImageindex + 'px';
        }

        next.addEventListener('click', function () {
            currentImageindex++;
            if (currentImageindex >= imgs.length) {
                currentImageindex = 0;
            }
            switchImg();
        });

        prev.addEventListener('click', function () {
            currentImageindex--;
            if (currentImageindex < 0) {
                currentImageindex = imgs.length - 1;
            }
            switchImg();
        });
    });


    let rotators = document.getElementsByClassName('rotators');

    [].forEach.call(rotators, function(f) {
        id1 = f.getElementsByClassName('rotate')[0];
        id2 = f.getElementsByClassName('rotate')[1];
        id3 = f.getElementsByClassName('rotate')[2];


        id1.addEventListener('click', function () {
           id1.style.width = '50px';
        });

        id2.addEventListener('click', function () {
            id2.style.width = '50px';
        });

        id3.addEventListener('click', function () {
            id3.style.width = '50px';
        });
    });

};