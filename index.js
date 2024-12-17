const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let firstPasswordEl = document.getElementById("firstPassword")
let secondPasswordEl = document.getElementById("secondPassword")
lowcaseCheckBox = ""
capsCheckBox = ""
numCheckBox = ""
symCheckBox = ""

function generatePassword(){
    firstPasswordEl.textContent = ""
    secondPasswordEl.textContent = ""
    itemsToRemove = ""
    
    checkBoxes()
    if(!lowcaseCheckBox && !capsCheckBox && !numCheckBox && !symCheckBox){
        alert("You need at least 1 filter to generate a password")
    }
        else{
            characterGenerator() 
        }
    
}

function checkBoxes(){
    numCheckBox = document.getElementById("numOn-Off").checked
    symCheckBox = document.getElementById("symOn-Off").checked
    capsCheckBox = document.getElementById("capsOn").checked
    lowcaseCheckBox = document.getElementById("capsOff").checked
}

function filtration(){

    if(numCheckBox === false){
        itemsToRemove += ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    }

    if(symCheckBox === false){
        itemsToRemove += ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
    }

    if(capsCheckBox === false){

        itemsToRemove += ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

    }
    
    if(lowcaseCheckBox === false){
        itemsToRemove += ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        }

    filteredArray = characters.filter(item => !itemsToRemove.includes(item));
    return filteredArray;
    
}

function characterGenerator(){
    let inputValue = document.getElementById("numSelect").value;
    if(inputValue <= 20 && inputValue >= 5){
        for(i = 0;i < inputValue; i++){
            filteredArray = filtration()
            randomCharacter = Math.floor(Math.random() * filteredArray.length) 
            firstPasswordEl.textContent += filteredArray[randomCharacter]
        }

        for(i = 0;i < inputValue; i++){
            filteredArray = filtration()
            randomCharacters2 = Math.floor(Math.random() * filteredArray.length) 
            secondPasswordEl.textContent += filteredArray[randomCharacters2]
    
        }
    }
            else{
                alert("Length must be between 5 and 20 characters!")
            }
}

function copyPassword(){
    var copyText = firstPasswordEl.textContent
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
}

function copyPasswordTwo(){
    var copyText = secondPasswordEl.textContent
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
}

