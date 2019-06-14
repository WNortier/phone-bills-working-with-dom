// get a reference to the sms or call radio buttons
var radioButtonOne = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var additionButtonElement = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var currentTotalCallsElement = document.querySelector(".callTotalTwo");
var currentTotalSmsElement = document.querySelector(".smsTotalTwo");
var currentTotalElement = document.querySelector(".totalTwo");
//add an event listener for when the add button is pressed
var currentWarning = 0;
var currentCritical = 0;

var totalCost2 = 0;
var smsTotal2 = 0;
var callsTotal2 = 0;
    
    function radioButtonBillTotal(){
        

            // billItemType will be 'call' or 'sms'
            var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
            if (checkedRadioBtn){
            var billItemType = checkedRadioBtn.value
            console.log(billItemType)
            }
            //console.log(billItemType);
            
        // update the correct total
        if (billItemType === "call"){
            callsTotal2 = 2.75 + callsTotal2;
        }

        else if (billItemType === "sms"){
            smsTotal2 += 0.75;

        }
    //console.log(callsTotal)

        //update the totals that is displayed on the screen.
        currentTotalCallsElement.innerHTML = callsTotal2.toFixed(2);
        currentTotalSmsElement.innerHTML = smsTotal2.toFixed(2);
        totalCost2 = callsTotal2 + smsTotal2;
        currentTotalElement.innerHTML = totalCost2.toFixed(2);

        if (Number(currentTotalElement.innerHTML) >= 30) {
            currentTotalElement.classList.add("warning");
        
        }
        if   (Number(currentTotalElement.innerHTML) >= 50) {
            currentTotalElement.classList.add("danger");
        }

}

additionButtonElement.addEventListener('click', radioButtonBillTotal);
//in the event listener get the value from the billItemTypeRadio radio buttons

