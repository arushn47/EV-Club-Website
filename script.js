const ham_open = document.querySelector(".ham-open");
const ham_close = document.querySelector(".ham-close i");
const sidebar = document.querySelector(".side-box");
const homeBtn = document.querySelectorAll(".home");
const topBtn = document.querySelector(".top-btn i");

let lastScrollTop = 0;

ham_open.addEventListener("click", () => {
    sidebar.classList.toggle("active");

    if (window.innerWidth <= 400 && sidebar.classList.contains("active")) {
        ham_close.classList.add("active");
    } else {
        ham_close.classList.remove("active");
    }
});

ham_close.addEventListener("click", () => {
    sidebar.classList.remove("active");
    ham_close.classList.remove("active");
});

window.onscroll = function () {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > 10) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

    if (currentScrollTop > lastScrollTop && sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
        ham_close.classList.remove("active");
    }

    lastScrollTop = currentScrollTop;
};

homeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

