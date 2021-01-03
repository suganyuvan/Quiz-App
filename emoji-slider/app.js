const body = document.querySelector("body");
const slider = document.querySelector("input");
const bar = document.querySelector(".progress-bar");
const thumb = document.querySelector(".thumb");
const slideIcon = document.querySelector(".slide-icon")
slider.oninput = () => {
    let sliderValue = slider.value;
    thumb.style.left = sliderValue + '%';
    bar.style.width = sliderValue + '%';
    if (sliderValue < 20) {
        slideIcon.style.marginTop = "0px";
        body.classList.add("angry");
        body.classList.remove("confuse");
        body.classList.remove("like");
    }
    if (sliderValue >= 20) {
        slideIcon.style.marginTop = "-140px";
        body.classList.add("confuse");
        body.classList.remove("angry");
        body.classList.remove("like");
    }
    if (sliderValue >= 40) {
        slideIcon.style.marginTop = "-280px";
    }
    if (sliderValue >= 60) {
        slideIcon.style.marginTop = "-420px";
        body.classList.remove("confuse");
        body.classList.remove("angry");
        body.classList.add("like");
    }
    if (sliderValue >= 80) {
        slideIcon.style.marginTop = "-560px";
    }
}