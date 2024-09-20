document.getElementById('add-money-btn').addEventListener('click', function(event){
event.preventDefault();
const addMoneyInput = document.getElementById('input-add-amount').value;
const addMoney= parseFloat(addMoneyInput);
const pinNumber = document.getElementById('input-pin-number').value;

if(pinNumber==='1234'){
 const balenceNumber = document.getElementById('account-balence').innerText;
const balence = parseFloat(balenceNumber);
const newBalance = addMoney + balence;

document.getElementById('account-balence').innerText=newBalance;
 
}
else{
    alert('this is wrong pin number plz cheek it')
}



})



// cashout //////////////////////////////

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutInput = document.getElementById('input-cashout-amount').value;
    const cashout = parseFloat(cashOutInput);
    const cashOutPinNumber = document.getElementById('cashout-input-pin-number').value
    

    if(cashOutPinNumber==='1234'){
        const amountNumber = document.getElementById('account-balence').innerText;
        const amount = parseFloat(amountNumber);
        const totalAmount = amount - cashout;
        document.getElementById('account-balence').innerText=totalAmount;

    }
    else{
    console.log('this pin is not correct .... try leter')
    }
})

// add money from show
document.getElementById('add-money-button').addEventListener('click', function(){
    document.getElementById('add-money-from').classList.remove('hidden');
    document.getElementById('cashout-from').classList.add('hidden');
})


// cashout from showdo
document.getElementById('cash-out-button').addEventListener('click',function(){
    document.getElementById('cashout-from').classList.remove('hidden');

    document.getElementById('add-money-from').classList.add('hidden');
})