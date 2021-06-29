let text = document.getElementsByTagName("body");

document.addEventListener("scroll", function () {

    scrollHeight = window.pageYOffset;
    textSize = parseInt(scrollHeight) / 20;
    console.log(textSize);
    text[0].style.fontSize = scrollHeight >= 300 ? `${textSize}px` : "";

});