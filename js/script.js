var icon1= document.getElementById("icon-1")
var icon3 = document.getElementById("icon-4")
var headerImg = document.getElementById("headerImage")

setInterval(icon1Sleep,1100);
setInterval(icon4Sleep,1100);
setInterval(sleepImage,2200)


function icon1Sleep(){
    icon1.style.left="20%"
    icon1.style.color="#fff"
}
function icon4Sleep(){
    icon3.style.right="20%"
    icon3.style.color="#fff"
}
function sleepImage(){
    headerImg.style.opacity="100%"
}
