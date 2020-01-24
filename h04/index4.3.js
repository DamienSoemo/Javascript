var plaatjestop = [1, 2, 3];
var teller = 0;
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('../h04/Image/Gokubottom1.jpg')";

slideholder.addEventListener("click", function () {
    getGokuTop();
    slideholder.style.backgroundImage = "url('../h04/Image/Gokubottom" + getGokuTop() + ".jpg')";
});

function getGokuTop() {
    if (teller >= plaatjestop.length) {
        teller = 1;
    } else {
        teller++
    }
    console.log(teller);
    return teller;
}

var plaatjesmid = [1, 2, 3];
var teller = 0;
var slideholder2 = document.getElementById("slideholder2");
slideholder2.style.backgroundImage = "url('../h04/Image/Gokumid1.jpg')";

slideholder2.addEventListener("click", function () {
    getGokuMid();
    slideholder2.style.backgroundImage = "url('../h04/Image/Gokumid" + getGokuMid() + ".jpg')";
});

function getGokuMid() {
    if (teller >= plaatjesmid.length) {
        teller = 1;
    } else {
        teller++
    }
    console.log(teller);
    return teller;

}

var plaatjesbottom = [1, 2, 3];
var teller = 0;
var slideholder3 = document.getElementById("slideholder3");
slideholder3.style.backgroundImage = "url('../h04/Image/Gokutop1.jpg')";

slideholder3.addEventListener("click", function () {
    getGokuBottom();
    slideholder3.style.backgroundImage = "url('../h04/Image/Gokutop" + getGokuBottom() + ".jpg')";
});

function getGokuBottom() {
    if (teller >= plaatjesbottom.length) {
        teller = 1;
    } else {
        teller++
    }
    console.log(teller);
    return teller;
}