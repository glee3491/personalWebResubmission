var elements = document.getElementsByTagName("div");
var hi = document.getElementById("hi");
var img = document.getElementById("mypic");

for (var i = 0; i < elements.length; i++) {
    if (elements[i].className == "elements") {                 elements[i].style.display = "none";
    } else if (elements[i].className == "label") {
        elements[i].onclick = switchDisplay;
    }
}

function switchDisplay() {
    var parent = this.parentNode;
    var target = parent.getElementsByTagName("div")[1];
    if (target.style.display == "none") {
        target.style.display = "block";
        hi.style.display = "none";
        img.src = "pics/menupic.png";
    } else {
        target.style.display = "none";
        hi.style.display = "block";
        img.src = "pics/mypic.png";
    }
    return false;
}