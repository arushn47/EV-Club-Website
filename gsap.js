// Loader Animation
let n=1;

window.onload = load(n); 

function load(e){
    if(e==1){
        document.body.classList.add("no-scroll");

        gsap.to(".loader-container span", {
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
        });

        gsap.to(".loader-container", {
            opacity: 0,
            duration: 1,
            delay: 3.5,
            y: "-100%",
            onComplete: function () {
                document.body.classList.remove("no-scroll");
            },
        });
        e--;
    }
};
