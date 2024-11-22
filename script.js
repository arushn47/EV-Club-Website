const ham_open = document.querySelector(".ham-open");
const ham_close = document.querySelector(".ham-close i");
const sidebar = document.querySelector(".side-box");
const homeBtn = document.querySelectorAll('.home');
const topBtn = document.querySelector('.top-btn i');

ham_open.addEventListener("click", () => {
    sidebar.classList.toggle('active');

    if (window.innerWidth <= 400 && sidebar.classList.contains("active")) {
        ham_close.classList.add('active');
    } else {
        ham_close.classList.remove('active');
    }
});

ham_close.addEventListener("click", () => {
    sidebar.classList.remove('active');
    ham_close.classList.remove('active');
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
            ham_close.classList.remove('active');
        }
    }

    else {
        topBtn.style.display = "none";
    }
};

homeBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        window.scrollTo(0, 0);
    })
});

topBtn.addEventListener("click", () => {
    this.window.scrollTo({ top: 0, behavior: "smooth" });
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
            document.body.classList.remove('no-scroll');
          }
    })
};
