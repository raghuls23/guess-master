var guess = document.getElementById("guessno");
var notifywin = document.getElementById("notifywin");
var result = document.getElementById("result");
var inst = document.getElementById("inst");
var magicNumber = Math.floor(Math.random() * 100) + 1;
var ref = document.getElementById("play");
var gameover = false;
console.log(magicNumber);
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var result = document.getElementById("result");
var attempt = 10;
const canvas = document.querySelector('#confetti');
const jsConfetti = new JSConfetti();

easyBtn.addEventListener("click", function() {
    attempt = 10;
    result.textContent = `You have ${attempt} chances left`;
    result.style.color = "#ffffff";
    result.style.width = "50%";
    result.style.borderRadius = "10px";
    // alert('Easy Mode Activated');
    return;
});

hardBtn.addEventListener("click", function() {
    attempt = 5;
    result.textContent = `You have ${attempt} chances left`;
    result.style.color = "#ffffff";
    result.style.width = "50%";
    result.style.borderRadius = "10px";
    // alert('Hard Mode Activated');
    return;
});

function refresh(){
    if(ref){
        window.location.reload();
    }
}

function disableButton(cmg) {
    const button = document.getElementById(cmg);
    button.disabled = true;
}

play.style.display = "none";

function check() {
    var input = parseInt(guess.value);

    if (isNaN(input) || input < 1 || input > 100) {
        notifywin.textContent = "Please enter a valid number between 1 and 100 🥲";
        inst.style.backgroundColor = "#3d90bf";
        result.textContent = "You have " + attempt + " chances left";
        notifywin.style.backgroundColor = "#3d90bf";
        result.style.backgroundColor = "#3d90bf";
        result.style.padding = "5px";
        inst.style.color = "#ffffff";
        result.style.color = "#ffffff";
        adjustInstSize();
        return;
    }
    else if (attempt <= 0) {
        notifywin.textContent = "Oooopssss... You lost the game 😭";
        result.textContent = "The Magic Number is: "+ magicNumber;
        notifywin.style.backgroundColor = "#ea431f";
        inst.style.backgroundColor = "#ea431f";
        inst.style.color = "#ffffff";
        result.style.color = "#ffffff";
        result.style.backgroundColor = "#ea431f";
        jsConfetti.addConfetti({emojis: ['😭','😥','😥','😔','😔','😭']});
        result.style.paddingBottom = "0px";
        play.style.display = "block";
        cmg.style.cursor = "not-allowed";
        // cmg.style.display = "none";
        adjustInstSize();
        disableButton("cmg");
        return;
    }
    else if (input === magicNumber) {
        notifywin.textContent = " ";
        result.textContent = "Wowww! You won the game 🎁";
        result.style.padding = "7px";
        result.style.width = "70%";
        notifywin.style.backgroundColor = "#53995a";
        inst.style.backgroundColor = "#53995a";
        result.style.backgroundColor = "#53995a";
        result.style.color = "#ffffff";
        jsConfetti.addConfetti();
        play.style.display = "block";
        disableButton("cmg");
        adjustInstSize();
        return;
    }
    else {
        attempt--;
        if (attempt <= 0) {
            notifywin.textContent = "Oooopssss... You lost the game 😭";
            result.textContent = "The Magic Number is: "+ magicNumber;
            play.style.display = "block";
            notifywin.style.backgroundColor = "#ea431f";
            inst.style.backgroundColor = "#ea431f";
            inst.style.color = "#ffffff";
            result.style.color = "#ffffff";
            result.style.backgroundColor = "#ea431f";
            cmg.style.cursor = "not-allowed";
            jsConfetti.addConfetti({emojis: ['😭','😥','😥','😔','😔','😭']});
            result.style.paddingBottom = "0px";
            // cmg.style.display = "none";
            adjustInstSize();
            disableButton("cmg");
            return;
        } else {
            notifywin.textContent = input > magicNumber ? "Your guess is greater than the magic number 🥺" : "Your guess is smaller than the magic number 🫣";
            result.textContent = "You have " + attempt + " chances left";
            result.style.padding = "5px";
            notifywin.style.backgroundColor = "#037E8C";
            result.style.color = "#ffffff";
            inst.style.backgroundColor = "#037E8C";
            result.style.backgroundColor = "#037E8C";
            inst.style.color = "#ffffff";
            adjustInstSize();
        }
    }
}

// function adjustInstSize() {
//     inst.style.width = '400px';
//     var width = inst.scrollWidth;
//     inst.style.width = width + 'px';
// }
