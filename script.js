const openButton =
    document.getElementById("openButton");

const countdownScreen =
    document.getElementById("countdownScreen");

const letterScreen =
    document.getElementById("letterScreen");

const envelopeWrapper =
    document.getElementById("envelopeWrapper");

const nextButton =
    document.getElementById("nextButton");

const heartsContainer =
    document.getElementById("hearts");


/* =========================================
   OPEN LETTER
========================================= */

openButton.addEventListener("click", function () {

    countdownScreen.style.transition =
        "opacity 1s ease, transform 1s ease";

    countdownScreen.style.opacity =
        "0";

    countdownScreen.style.transform =
        "scale(.94)";

    setTimeout(function () {

        countdownScreen.style.display =
            "none";

        letterScreen.classList.add(
            "show"
        );

        setTimeout(function () {

            envelopeWrapper.classList.add(
                "open"
            );

        }, 1200);

    }, 900);

});


/* =========================================
   NEXT BUTTON
   ANIMATED TRANSITION TO MEMORIES
========================================= */

nextButton.addEventListener(
    "click",
    function () {

        /*
            Prevent double clicks
        */

        if (
            document.body.classList.contains(
                "page-leaving"
            )
        ) {
            return;
        }


        document.body.classList.add(
            "page-leaving"
        );


        /*
            Create transition hearts
        */

        for (
            let i = 0;
            i < 20;
            i++
        ) {

            setTimeout(
                function () {

                    createTransitionHeart();

                },
                i * 45
            );

        }


        /*
            Open memories page
            after animation
        */

        setTimeout(
            function () {

                window.location.href =
                    "memories.html";

            },
            1450
        );

    }
);


/* =========================================
   NORMAL FLOATING HEARTS
========================================= */

function createHeart() {

    if (!heartsContainer) {
        return;
    }


    const heart =
        document.createElement("div");

    heart.classList.add(
        "heart"
    );


    const heartTypes = [
        "♡",
        "♥"
    ];


    heart.innerHTML =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];


    heart.style.left =
        Math.random() * 100 +
        "vw";


    heart.style.fontSize =
        (
            Math.random() *
            18 +
            10
        ) + "px";


    heart.style.animationDuration =
        (
            Math.random() *
            6 +
            7
        ) + "s";


    heartsContainer.appendChild(
        heart
    );


    setTimeout(
        function () {

            heart.remove();

        },
        13000
    );

}


/* =========================================
   TRANSITION HEARTS
========================================= */

function createTransitionHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.classList.add(
        "transition-heart"
    );


    heart.innerHTML =
        Math.random() >
        0.5
            ? "♥"
            : "♡";


    heart.style.left =
        (
            Math.random() *
            100
        ) + "vw";


    heart.style.top =
        (
            Math.random() *
            65 +
            15
        ) + "vh";


    heart.style.fontSize =
        (
            Math.random() *
            28 +
            14
        ) + "px";


    /*
        Random sideways movement
    */

    heart.style.setProperty(
        "--heart-x",
        (
            Math.random() *
            100 -
            50
        ) + "px"
    );


    heart.style.setProperty(
        "--heart-rotate",
        (
            Math.random() *
            50 -
            25
        ) + "deg"
    );


    document.body.appendChild(
        heart
    );


    setTimeout(
        function () {

            heart.remove();

        },
        1600
    );

}


/* =========================================
   START FLOATING HEARTS
========================================= */

setInterval(
    createHeart,
    650
);