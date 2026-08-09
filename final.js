const heartsContainer =
    document.getElementById("hearts");


/* =========================================
   CREATE INTRO HEART
========================================= */

function createIntroHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add(
        "intro-heart"
    );


    const heartTypes = [
        "♥",
        "♡",
        "❤"
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
            38 +
            16
        ) + "px";


    heart.style.setProperty(
        "--duration",
        (
            Math.random() *
            1.8 +
            2.2
        ) + "s"
    );


    heart.style.setProperty(
        "--drift",
        (
            Math.random() *
            140 -
            70
        ) + "px"
    );


    heart.style.setProperty(
        "--rotation",
        (
            Math.random() *
            80 -
            40
        ) + "deg"
    );


    document.body.appendChild(
        heart
    );


    setTimeout(
        function () {

            heart.remove();

        },
        4500
    );
}


/* =========================================
   PLAY FINAL INTRO
========================================= */

function playFinalIntro() {

    const totalHearts =
        34;


    for (
        let i = 0;
        i < totalHearts;
        i++
    ) {

        setTimeout(
            function () {

                createIntroHeart();

            },
            i * 60
        );

    }


    /*
        Show final content
    */

    setTimeout(
        function () {

            document.body.classList.add(
                "final-ready"
            );

        },
        1900
    );
}


/* =========================================
   NORMAL FLOATING HEART
========================================= */

function createHeart() {

    if (!heartsContainer) {
        return;
    }


    const heart =
        document.createElement(
            "div"
        );


    heart.classList.add(
        "heart"
    );


    const normalHeartTypes = [
        "♥",
        "♡"
    ];


    heart.innerHTML =
        normalHeartTypes[
            Math.floor(
                Math.random() *
                normalHeartTypes.length
            )
        ];


    heart.style.left =
        Math.random() * 100 +
        "vw";


    heart.style.fontSize =
        (
            Math.random() *
            20 +
            10
        ) + "px";


    heart.style.animationDuration =
        (
            Math.random() *
            7 +
            8
        ) + "s";


    heart.style.animationDelay =
        (
            Math.random() *
            1.5
        ) + "s";


    heartsContainer.appendChild(
        heart
    );


    setTimeout(
        function () {

            heart.remove();

        },
        17000
    );
}


/* =========================================
   START PAGE
========================================= */

playFinalIntro();


/* =========================================
   START NORMAL HEARTS AFTER INTRO
========================================= */

setTimeout(
    function () {

        createHeart();

        setInterval(
            createHeart,
            650
        );

    },
    2300
);