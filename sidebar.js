function openNav() {
    console.log("open")
    const header = document.querySelector("header");
    const menu = document.querySelector(".menu");
    const closeBtn = document.querySelector(".close-btn");
    if (header && menu) {
        header.style.width = "200px";
        menu.style.display = "flex";
        closeBtn.style.display = "block";
    }
}

function closeNav() {
    console.log("close")
    const header = document.querySelector("header");
    const menu = document.querySelector(".menu");
    const closeBtn = document.querySelector(".close-btn");
    if (header && menu) {
        header.style.width = "50px";
        menu.style.display = "none";
        closeBtn.style.display = "none";
    }
}

function adjustMenuOnResize() {
    const menu = document.querySelector(".menu");
    const closeBtn = document.querySelector(".close-btn");
    const header = document.querySelector("header");

    if (window.innerWidth > 1200) {
        menu.style.display = "flex";
        closeBtn.style.display = "none";
    } else if (window.innerWidth <= 600) {
        menu.style.display = "flex";
        header.style.width="100vw";
        header.style.padding = "10px";
        closeBtn.style.display = "none";
    } else {
        menu.style.display = "none";
        closeBtn.style.display = "none";
        header.style.width = "50px";
    }
}

window.addEventListener("resize", adjustMenuOnResize);
window.addEventListener("load", adjustMenuOnResize);

document.querySelectorAll(".menu ul li a").forEach(link => {
    link.addEventListener("click", () => {
        closeNav();
    });
});