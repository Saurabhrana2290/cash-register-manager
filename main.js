const checkButton = document.querySelector('#check-btn');
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if(billAmount.value > 0) {

    if( billAmount.value < cashGiven.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    }
    else if(billAmount.value===cashGiven.value){
      showMessage("No amount to be returned!");
    }
    else if(cashGiven.value < billAmount.value){
      showMessage("Cash given less then the bill amount is not acceptable!");
    }

  } 
  else{
    showMessage("Bill Amount should be greater than zero!");
  }
});
function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    noOfNotes[i].innerText = numberOfNotes;
    amountToBeReturned = amountToBeReturned % availableNotes[i];
  }
}
function hideMessage() {
  message.style.display = "none";
}
function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}