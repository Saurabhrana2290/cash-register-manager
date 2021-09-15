var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector('#cash-given');
var checkButton = document.querySelector('#check-btn');
var message = document.querySelector("#error-message");
var non = document.querySelector(".n");
var notes=[2000,500,100,20,10,5,1];
function amountHandler(){
    
    if(billAmount.value===cashGiven.value){
        message.innerText = "No amount to return";   
    }
    else if(billAmount.value > 0){
        if(cashGiven.value>billAmount.value){
            var amountDifference = cashGiven.value-billAmount.value;
            calculateAmountReturn(amountDifference);
        }else{
            message.innerText="Wash the plates!";   
        }
    }
    else{
        message.innerText = "Bill amount should be greater than zero!";
        
    }
}

function calculateAmountReturn(amountDifference){
    for(var i=0;i<notes.length;i++){
        var numberOfNotes = Math.trunc(amountDifference/notes[i]);
        amountDifference %= notes[i];
        non[i].innerText=numberOfNotes;
    }
}

checkButton.addEventListener("click",amountHandler);