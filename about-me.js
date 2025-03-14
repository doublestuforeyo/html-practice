let normal = "file:///Users/zariyascullark/Documents/Screenshot%202025-03-14%20at%208.51.59%E2%80%AFAM.png"
let sleep = "file:///Users/zariyascullark/Documents/Screenshot%202025-03-14%20at%209.49.58%E2%80%AFAM.png";
let silly = "file:///Users/zariyascullark/Documents/Screenshot%202025-03-14%20at%209.51.42%E2%80%AFAM.png";
let alien = "file:///Users/zariyascullark/Downloads/IMG_1123.jpg";
let proper = "file:///Users/zariyascullark/Documents/Screenshot%202025-03-14%20at%2010.17.04%E2%80%AFAM.png"
let bunny = "file:///Users/zariyascullark/Documents/Screenshot%202025-03-14%20at%2010.05.22%E2%80%AFAM.png"
let evil = "file:///Users/zariyascullark/Documents/Screenshot%202025-03-14%20at%2010.06.49%E2%80%AFAM.png"
let clean = "file:///Users/zariyascullark/Downloads/7BFB4C82-19A7-4CE4-8C98-0FC35FB87BB6.JPG"
let loaf = "file:///Users/zariyascullark/Documents/Screenshot%202025-03-14%20at%2010.08.36%E2%80%AFAM.png"
let suitcase = "file:///Users/zariyascullark/Documents/Screenshot%202025-03-14%20at%2010.09.26%E2%80%AFAM.png"
let autism = "file:///Users/zariyascullark/Documents/Screenshot%202025-03-14%20at%2010.10.43%E2%80%AFAM.png"

let astrids = [normal, sleep, silly, alien, proper, bunny, evil, clean, loaf, suitcase, autism];

let num = 0;
function changeImg(){
    //let randomIndex = Math.floor(Math.random()*4);
    num++;
    if (num >= 11){
        num = 0;
    }

    if (num == 1){
        document.getElementById('astrid').innerHTML = "Sleepy Astrid";
    }

    if (num == 2){
        document.getElementById('astrid').innerHTML = "Silly Astrid";
    }

    console.log(num);
    document.getElementById('cat-pic').src = astrids[num];

}