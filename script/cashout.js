document.getElementById("cash-out-btn").addEventListener('click',
    function (event){
        event.preventDefault();
        const pinNumber = document.getElementById('cash-out-pin').value;
        const convertedPin = parseInt(pinNumber);
        const cashOutAmount = document.getElementById('cash-out-amount').value;
        const convertedCashoutAmount = parseFloat(cashOutAmount);
        const mainBalance = document.getElementById("main-balance").innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        if(convertedPin===1234){
            const sum =convertedMainBalance-convertedCashoutAmount;
            document.getElementById("main-balance").innerText =sum;

            //// transection history
            const transectionContainer=document.getElementById("transection-container");
            const transectionNumber = document.getElementById("cashout-numbr").value;
            const p=document.createElement("p");
            p.innerText = `
        Cash out ${convertedCashoutAmount} from ${transectionNumber} this account.
            `
            transectionContainer.appendChild(p);
            // transection history
        }
        else{
            alert("Wrong Pin")

       }
    
    })