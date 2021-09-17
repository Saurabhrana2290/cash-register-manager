const checkButton = document.querySelector('#check-btn');
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
checkButton.addEventListener("click",function validateBillAndCashAmount(){
  hideMessage();
  const amountToBeReturned = cashGiven.value - billAmount.value;
  (billAmount.value>0) ? ((cashGiven.value>=billAmount.value) ? calculateChange(amountToBeReturned):showMessage("Cash given cannot be less than bill amount!")  ) : showMessage("Invalid bill amount!");
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