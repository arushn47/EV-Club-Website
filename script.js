const ham = document.querySelector(".ham");
const sidebar = document.querySelector(".side-box");
const topBtn = document.querySelector(".top-btn i");


ham.addEventListener("click", () => {
    sidebar.classList.toggle('active');
});

window.onscroll = function() {
    if (window.scrollY > 10) {
        topBtn.style.display = "block";
    }

    else {
        topBtn.style.display = "none";
        if (sidebar.classList.contains("active")) {
            sidebar.classList.toggle('active');
        }
    }
};

topBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
});
