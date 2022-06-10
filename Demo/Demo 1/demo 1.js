let imgObj = null;
imgObj = document.getElementById('myImage');
function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}
function moveRight() {
    console.log(imgObj.style.left);
    console.log(parseInt(imgObj.style.left));
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
window.onload = init;