document.getElementById("add-money-btn").addEventListener('click',
    function (event){
        event.preventDefault();
        const addAmount = document.getElementById('add-amount').value;
       const convertedAmount= parseFloat(addAmount)
       const pinNumber = document.getElementById('pin').value;
       const mainBalance = document.getElementById("main-balance").innerText;
       const convertedMainBalance = parseFloat(mainBalance);
       if( mainBalance && pinNumber){
        if(pinNumber==="1234"){
            const sum =convertedMainBalance+convertedAmount;
            document.getElementById("main-balance").innerText =sum;

         //// transection history
            const transectionContainer=document.getElementById("transection-container");
            const transectionNumber = document.getElementById("account-number").value;
            const p=document.createElement("p");
            p.innerText = `
        Added ${convertedAmount} from ${transectionNumber} this account
            `
            transectionContainer.appendChild(p);
            // transection history
        }
        else{
            alert("Rong Pin")

       }
       }
       else
       {
        alert("Enter amount and Pin number")
       }

    }

)