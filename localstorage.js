// use localstorage to set name boolean pairs for all items to keep
// track of what is favorited and what isnt

function isFavorited(item) {
    if(localStorage.getItem(item) === "true") {
        return true;
    } else {
        return false;
    }
}

function checkboxInteract(item, checkbox) {
    if(document.getElementById(item).checked == true) {
        localStorage.setItem(item, "true")
        document.getElementById(checkbox).style.animation = "favorite-gold 1.5s forwards"
    } else {
        localStorage.setItem(item, "false")
        document.getElementById(checkbox).style.animation = "favorite-default 1.5s forwards"
    }
}

function checkIfFavorite(item, checkbox) {
    if(isFavorited(item)) {
        document.getElementById(item).checked = true;
        document.getElementById(checkbox).style.animation = "favorite-gold 1.5s forwards"
    } else {
        document.getElementById(item).checked = false;
    }
}

function loadFavorites() {
    let i = 0;
    let j = 1;
    let key = localStorage.key(i);
    while(key != null) {
        if(isFavorited(key)) {
            let card = key.slice(0, 1) + key.slice(2);
            document.getElementById("slot" + j.toString()).appendChild(document.getElementById(card));
            j++;
        }
        i++;
        key = localStorage.key(i);
    }
}
