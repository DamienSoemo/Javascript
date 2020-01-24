var plaatjes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var teller = 0;
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('../h03/Image/Geit1.jpg')";

slideholder.addEventListener("click", function () {
    getGeit();
    slideholder.style.backgroundImage = "url('../h03/Image/Geit" + getGeit() + ".jpg')";
});

function getGeit() {
    if(teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++
    }
    console.log(teller);
    return teller;
}

