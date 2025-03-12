let cherry = "https://i.pinimg.com/originals/66/ce/29/66ce29d34f1c66490cb8aa10c8b9f2cd.jpg";
let young = "https://i.pinimg.com/736x/21/cd/4d/21cd4d2aa5101e8c3f18ce608922683f.jpg";
let chill = "file:///Users/zariyascullark/Documents/Screenshot%202025-03-12%20at%2011.01.30%E2%80%AFAM.png";
let standard = "https://i.pinimg.com/736x/0a/3d/16/0a3d16582aca3826606564f383e270ce.jpg"

let costumes = [standard, cherry, young, chill];

let num = 0;
function changeImg(){
    //let randomIndex = Math.floor(Math.random()*4);
    num++;
    if (num >= 4){
        num = 0;
    }

    console.log(num);
    document.getElementById('img1').src = costumes[num];
}