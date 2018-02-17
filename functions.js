
var imgArray = new Array("images/ball.jpg","images/figure.png");
var imgCount = 0;
function startTime() {
    if(imgCount == imgArray.length) {
        imgCount = 0;
    }
    document.getElementById("img1").src = imgArray[imgCount];
    imgCount++;
    setTimeout("startTime()", 5000);
}    
