let firstPw = document.getElementById('box-one');
let secondPw = document.getElementById('box-two');
let button = document.getElementById ("password-btn");
let charLimit = 15;



const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function randPassword() {
    return characters[Math.floor(Math.random() * characters.length)];
}

function password() {
    let i = 0;
    firstPw.textContent = "";
    secondPw.textContent = "";
        while(i<charLimit) {
        randOne = randPassword();
        randTwo = randPassword();
        firstPw.textContent += randOne;
        secondPw.textContent += randTwo;
        i++;
        }
}
