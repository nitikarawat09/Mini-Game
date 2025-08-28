let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "green", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
        if (started === false) {
                console.log("game is started");
                started = true;

                levelUp();
        }
});

function btnFlash(btn) {
        btn.classList.add("flash");
        setTimeout(function() {
                btn.classList.remove("flash");
        }, 250);
}

function userFlash(btn) {
        btn.classList.add("userflash");
        setTimeout(function() {
                btn.classList.remove("userflash");
        }, 250);
}

function levelUp() {
        userseq = [];
        level++;
        h2.innerText = `Level ${level}`
        // random button choose 
        let randIdx = Math.floor(Math.random() * btns.length);
        let randcolor = btns[randIdx];
        let randbtn = document.querySelector(`.${randcolor}`);
        // console.log(randcolor);
        // console.log(randIdx);
        // console.log(randbtn);
        gameseq.push(randcolor);
        console.log(gameseq);
        btnFlash(randbtn);

}  

// function checkans() {
//         // console.log("current level: ", level);
//         let idx = level - 1;
//         if (userseq[idx] == gameseq[idx]) {
//                 console.log("same value");

//         } else {
//                 h2.innerText = `Game Over! Press any key to restart`;
//         }
        
// }


// reset game
function resetGame() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}



function checkans() {
    let idx = userseq.length - 1;
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
                console.log("same value");
            setTimeout(levelUp, 1000); // go to next level after full sequence
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level} </b>  <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
        document.querySelector("body").style.backgroundColor = "#11141a";
                }, 150);
        resetGame();
    }
}

// ading event listeners to buttons
function btnPress() {
        let btn = this;
        userFlash(btn);

        let userColor = btn.getAttribute("id");
        userseq.push(userColor);

        checkans();
        
}

let allbtns = document.querySelectorAll(".btn");
for(let btn of allbtns) {
        btn.addEventListener("click", btnPress) ;
                
}



// homework - track highest score

