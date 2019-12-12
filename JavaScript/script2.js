var elements = document.getElementsByTagName("div");
var pic = document.getElementById("pic");
var info = document.getElementById("info")
var abtme = document.getElementById("abtme");

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
        pic.style.display = "none";
        info.style.display = "none";
    } else {
        target.style.display = "none";
        pic.style.display = "block";
        info.style.display = "block";
    }
    return false;
}