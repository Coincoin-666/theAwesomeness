let zoomImg = document.getElementById("zoomImg");

zoomImg.addEventListener("click", function() {
    if(zoomImg.style.width == "50%") {
        zoomImg.style.width = "100%";
    } else {
        zoomImg.style.width = "50%";
    }
})