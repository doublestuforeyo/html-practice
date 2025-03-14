let normal = "images/normal-cat.png";
let sleep = "images/sleep-cat.png";
let silly = "images/silly-cat.png";
let alien = "images/alien-cat.jpg";
let proper = "images/fancy-cat.png";
let bunny = "images/bunny-cat.png";
let evil = "images/evil-cat.png";
let clean = "images/cat-clean.png";
let loaf = "images/loaf-cat.png";
let suitcase = "images/suitcase-cat.png";
let autism = "images/autism-cat.png";

let astrids = [normal, sleep, silly, alien, proper, bunny, evil, clean, loaf, suitcase, autism];

let num = 0;
function changeImg(){
    //let randomIndex = Math.floor(Math.random()*4);
    num++;
    if (num >= 11){
        num = 0;
    }

    console.log(num);
    document.getElementById('cat-pic').src = astrids[num];

    if (num == 0){
        document.getElementById('astrid').innerHTML = "Astrid";
    }

    if (num == 1){
        document.getElementById('astrid').innerHTML = "Sleepy Astrid";
    }

    if (num == 2){
        document.getElementById('astrid').innerHTML = "Silly Astrid";
    }

    if (num == 3){
        document.getElementById('astrid').innerHTML = "Alien Astrid";
    }

    if (num == 4){
        document.getElementById('astrid').innerHTML = "Fancy Astrid";
    }

    if (num == 5){
        document.getElementById('astrid').innerHTML = "Bunny Astrid";
    }

    if (num == 6){
        document.getElementById('astrid').innerHTML = "Evil Astrid";
    }

    if (num == 7){
        document.getElementById('astrid').innerHTML = "Clean Astrid";
    }

    if (num == 8){
        document.getElementById('astrid').innerHTML = "Loaf Astrid";
    }

    if (num == 9){
        document.getElementById('astrid').innerHTML = "Suitcase Astrid";
    }

    if (num == 10){
        document.getElementById('astrid').innerHTML = "Dumb Astrid";
    }

}