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
            maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -100,
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
};