//slideshows
slideShow();

function slideShow() {
    pictures = ["img/MinerGame.png", "img/MinerGame-UML.jpg"]
    var img = document.getElementById("MinerImage");
    if (img.alt == "0") {
        img.src = pictures[0];
        img.alt = "1"
    } else {
        img.src = pictures[1];
        img.alt = "0";
    }
    setTimeout(slideShow, 2000);
}
