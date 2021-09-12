var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector('#cash-given');
var checkButton = document.querySelector('#check-btn');
var message = document.querySelector("#error-message");
var notes=[2000,500,100,20,10,5,1];
function amountHandler(){
    message.style.display = "none";
    if(billAmount.value===cashGiven.value){
        msg = "No amount to return";
        setMessage(msg);
    }
    else if(billAmount.value > 0){
        if(cashGiven.value>billAmount.value){
            var amountDifference = cashGiven.value-billAmount.value;
            calculateAmountReturn(amountDifference);
        }else{
            msg="Wash the plates!";
        }
    }
    else{
        msg = "Bill amount should be greater than zero!"
        setMessage(msg);
    }
}
function setMessage(meg){
    message.style.display = "none";
    message.innerHTML=msg;
}
function calculateAmountReturn(amountDifference){
    for(var i=0;i<notes.length;i++){
        var numberOfNotes = Math.trunc(amountDifference/notes[i]);
        amountDifference %= notes[i];
        console.log(numberOfNotes);
    }
}

checkButton.addEventListener("click",amountHandler);