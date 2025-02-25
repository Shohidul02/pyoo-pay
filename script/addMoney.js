document.getElementById("add-money").addEventListener('click',
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