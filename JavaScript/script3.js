var elements = document.getElementsByTagName("div");
var dntm = document.getElementById("dntm");
var sltc = document.getElementById("sltc");

for (var i = 0; i < elements.length; i++) {
    if (elements[i].className == "elements") {                 
        elements[i].style.display = "none";
    } else if (elements[i].className == "label") {
        elements[i].onclick = switchDisplay;
    }
}

function switchDisplay() {
    var parent = this.parentNode;
    var target = parent.getElementsByTagName("div")[1];
    if (target.style.display == "none") {
        target.style.display = "block";
        dntm.style.display = "none";
        sltc.style.display = "none";
    } else {
        target.style.display = "none";
        dntm.style.display = "block";
        sltc.style.display = "block";
    }
    return false;
}

var dntmModal = document.getElementById('dntmModal');
 
// Get the button that opens the modal
var dntmBtn = document.getElementById("dntmBtn");
 
// Get the <span> element that closes the modal
var dntmSpan = document.getElementsByClassName("dntmClose")[0];  

// When the user clicks on the button, open the modal 
dntmBtn.onclick = function() {
    dntmModal.style.display = "block";
}
 
// When the user clicks on <span> (x), close the modal
dntmSpan.onclick = function() {
    dntmModal.style.display = "none";
}
 
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == dntmModal) {
        dntmModal.style.display = "none";
    }
}

var sltcModal = document.getElementById('sltcModal');
 
// Get the button that opens the modal
var sltcBtn = document.getElementById("sltcBtn");
 
// Get the <span> element that closes the modal
var sltcSpan = document.getElementsByClassName("sltcClose")[0];  

// When the user clicks on the button, open the modal 
sltcBtn.onclick = function() {
    sltcModal.style.display = "block";
}
 
// When the user clicks on <span> (x), close the modal
sltcSpan.onclick = function() {
    sltcModal.style.display = "none";
}
 
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == sltcModal) {
        sltcModal.style.display = "none";
    }
}