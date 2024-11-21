const ham = document.querySelector(".ham");
const sidebar = document.querySelector(".side-box");
const close = document.querySelector(".fa-xmark");
const homeBtn = document.querySelector('.home');
const topBtn = document.querySelector('.top-btn i');



ham.addEventListener("click", () => {
    sidebar.classList.toggle('active');

    if (window.innerWidth <= 400 && sidebar.classList.contains("active")) {
        close.style.display = close.style.display === "inline-block" ? "none" : "inline-block";
    }
});

close.addEventListener("click", () => {
    sidebar.classList.toggle('active');
    close.style.display = close.style.display === "inline-block" ? "none" : "inline-block";
});

window.onscroll = function () {
    let currentScrollTop = window.scrollY;
    let lastScrollTop = 0;

    if (window.scrollY > 10) {
        topBtn.style.display = "block";
    }

    if (currentScrollTop > lastScrollTop) {
        if (sidebar.classList.contains("active")) {
            sidebar.classList.toggle('active');
            close.style.display = "none";
        }
    }

    else {
        topBtn.style.display = "none";
    }
};


homeBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

topBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
});


window.onload = function () {
    document.body.classList.add('no-scroll');

    gsap.to(".loader-container span", {
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
    });

    gsap.to(".loader-container", {
        opacity: 0,
        duration: 1,
        delay: 3.5,
        y:'-100%',
        onComplete: function() {
            // Remove the no-scroll class to enable scrolling
            document.body.classList.remove('no-scroll');
          }
    })
};
