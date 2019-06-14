    // get a references
    var billTypeText = document.querySelector(".billTypeText");
    var addButton = document.querySelector(".addToBillBtn");
    var totalOneElem = document.querySelector(".totalOne");
    var callTotalOneElem = document.querySelector(".callTotalOne");
    var smsTotalOneElem = document.querySelector(".smsTotalOne");

    var totalCost = 0;
    var smsTotal = 0;
    var callsTotal = 0;

    
    function textBillTotal(){
        // get the value entered in the billType textfield
        var billTypeEntered = billTypeText.value.trim();
        // update the correct total
        if (billTypeEntered === "call"){
            callsTotal += 2.75
        }
        else if (billTypeEntered === "sms"){
            smsTotal += 0.75;
        }
        
        //update the totals that is displayed on the screen.
        callTotalOneElem.innerHTML = callsTotal.toFixed(2);
        smsTotalOneElem.innerHTML = smsTotal.toFixed(2);
        var totalCost = callsTotal + smsTotal;
        totalOneElem.innerHTML = totalCost.toFixed(2);
    
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalOneElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalOneElem.classList.add("warning");
    }
}

addButton.addEventListener('click', textBillTotal);