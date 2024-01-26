document.addEventListener("DOMContentLoaded", function () {

    const bubble1 = document.getElementById("bubble1");
    const bubble2 = document.getElementById("bubble2");
    const container = document.querySelector(".container-bubble");

    function floatBubbles() {
        TweenMax.to(bubble1, 2, { x: "+=50", y: "+=50", repeat: -1, yoyo: true, ease: "Power1.easeInOut" });
        TweenMax.to(bubble2, 1.5, { x: "-=30", y: "-=30", repeat: -1, yoyo: true, ease: "Power1.easeInOut" });
    }

    function moveBubbleToRandomPosition(bubble) {
        const maxX = container.offsetWidth - bubble.offsetWidth;
        const maxY = container.offsetHeight - bubble.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        TweenMax.to(bubble, 0.5, {
            x: randomX,
            y: randomY,
            ease: Power1.easeInOut,
        });
    }

    floatBubbles();

    bubble1.addEventListener("mouseover", function () {
        moveBubbleToRandomPosition(bubble1);
    });

    bubble2.addEventListener("mouseover", function () {
        moveBubbleToRandomPosition(bubble2);
    });

    container.addEventListener("mouseout", function () {
        // Inicia la animación continua al salir del hover en el contenedor
        floatBubbles();
    });

});
