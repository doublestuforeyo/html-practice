let normal = "images/normal-cat.jpg";
let sleep = "images/sleep-cat.jpg";
let silly = "images/silly-cat.jpg";
let alien = "images/alien-cat.jpg";
let proper = "images/fancy-cat.jpg"
let bunny = "images/bunny-cat.jpg"
let evil = "images/evil-cat.jpg"
let clean = "images/clean-cat.jpg"
let loaf = "images/loaf-cat.jpg"
let suitcase = "images/suitcase-cat.jpg"
let autism = "images/autism-cat.jpg"

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