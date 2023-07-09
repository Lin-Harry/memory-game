let possibleCardFaces = [
    "./imgs/carton_1.png",
    "./imgs/carton_2.png",
    "./imgs/carton_3.png",
    "./imgs/carton_4.png",
    "./imgs/carton_5.png",
    "./imgs/carton_6.png",
    "./imgs/carton_1.png",
    "./imgs/carton_2.png",
    "./imgs/carton_3.png",
    "./imgs/carton_4.png",
    "./imgs/carton_5.png",
    "./imgs/carton_6.png",
];

function getRandomIndex(length){
    //0-1 decimal * 12 = 0-11.99, math.floor rounds down to nearest whole number
    return Math.floor(Math.random() * length);
}

function getRandomFace(){
    // 0-11
    const randomIndex = getRandomIndex(possibleCardFaces.length);
    const face = possibleCardFaces[randomIndex];
    possibleCardFaces.splice(randomIndex, 1);
    return face;
}

function shuffleCards(cardFaces){
    for (let i = 0; i < cardFaces.length; i++){
        cardFaces[i].innerHTML = `<img src="${getRandomFace()} alt="carton" />`;
        console.log(`cardFaces${i}`, cardFaces[i].innerHTML);
    }
}

document.addEventListener('DOMContentLoaded',function(){
    let newGameButton = document.getElementById("new-game-button");
    let gameContainer = document.getElementById("game-container");
    let gameCardElements = document.querySelectorAll("game-card");
    let cardFaces = document.querySelectorAll(".game-card .back");
    let scoreBoard = document.getElementById("score-board");
    let gameClicks = document.querySelector(".click-count");
    let lowScoreOutput = document.querySelector(".low-score");
    let winScreen = document.getElementById("win-screen");
    let replay = document.getElementById("replay-button");

    shuffleCards(cardFaces);

    newGameButton.addEventListener("click", function () {
        gameContainer.classList.remove("hidden");
     });

    //  smooth scrolling
    let links = document.querySelectorAll("a");
    for (let i =0; i< links.length; i++){
        links[i].addEventListener("click", function(event){
            console.log("hash",this.hash);
            if (this.hash !== ""){
                event.premtDefault();
                let hash = this.hash;
                let target = document.querySelector(hash);
                window.scrollTo({
                    top: target.offsetTop,
                    behavior:"smooth"
                })
            }
        });
    }
});


