function getPin(){
    const random = Math.random()*10000;
    const pin = (random + " ").split('.')[0];
    if(pin.length === 4){
        return pin;
    }
    else{
        return getPin(); // recursive function 
    }
}

// display generated pin 
function generatePin(){
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();

}

// handle calculator button event 
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click',function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        // handle backspace
        // handle clear
        if(digit === 'C'){
            const typedInput = document.getElementById("typed-pin");
            typedInput.value = '';
        }
    }
    else{
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})

function verifyPin() {
  const pin = document.getElementById("pin").value;
  const typedPin = document.getElementById("typed-pin").value;
  if (pin === typedPin) {
      displayMatchResult('block' , 'none')
  }
   else {
      displayMatchResult("none", "block");
      
  }
}


function displayMatchResult(correctStatus, inCorrectStatus){
const correct = document.getElementById("correct-pin");
correct.style.display = correctStatus;
const inCorrect = document.getElementById("incorrect-pin");
inCorrect.style.display = inCorrectStatus;
}