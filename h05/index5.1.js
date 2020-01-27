pics = document.getElementById("pics");
createPiceHolders();
createGeitImages();

function createPiceHolders() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder" + i;
        pics.appendChild(pictureHolder);
    }
}

function createGeitImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i + 1);
        geitPlaatje = document.createElement("img");
        geitPlaatje.src = "../h03/Image/Geit" + (i + 1) + ".jpg";
        geitPlaatje.id = (i + 1);
        geitPlaatje.addEventListener("click", function () {
            maakFavoriet(this.id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(geitPlaatje);

    }
}

function maakFavoriet(id) {
    console.log("Maak mij Favoriet! Het gaat om geit..." + id);
    notsofavoriet = document.getElementsByClassName("favoriet");

    for(var i = 0; i < notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage ="none";
    }
    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('../h05/Image/heart.png')";
}


//picsHolders maken
//PicsHolder bevat een plaatje van een aap en een fovorite symbool (hartje)

//geitenPlaatjes toevoegen aan picsHolders
//favoriteSymbols toevoegn aan picsHolders

