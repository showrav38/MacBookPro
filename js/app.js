function prizeAmount(itemName, prize){
    const prevItemText = document.getElementById(itemName);
    const prevMemoryCost = parseInt(prevItemText.innerText);
    const defualtCapacityPrize = prize;
    prevItemText.innerText = defualtCapacityPrize;
    totalBalance();
}

function getInputValue(inputId){
    const inputSectiontext = document.getElementById(inputId);
    const inputSectionAmount = parseInt(inputSectiontext.innerText);
    return inputSectionAmount;
}
function totalBalance(){
    const bestPrize = getInputValue('best-prize');
    const extraMemoryCost = getInputValue('memory-cost');
    const extraStorageCost = getInputValue('storage-cost');
    const deliveryCharge = getInputValue('delivery-charge');
    const total = bestPrize + extraMemoryCost + extraStorageCost + deliveryCharge;
    const totalText = document.getElementById('total');
    const totalAmount = parseInt(totalText.innerText);
    totalText.innerText = total;
    // const bestPrizetext = document.getElementById('best-prize');
    // const bestPrizeAmount = parseInt(bestPrizetext.innerText);

}

document.getElementById('memory-capacity-8gb').addEventListener('click',function(){
    prizeAmount('memory-cost',0);
})

document.getElementById('memory-capacity-16gb').addEventListener('click',function(){
    prizeAmount('memory-cost',50);
})

document.getElementById('storage-256gb').addEventListener('click',function(){
    prizeAmount('storage-cost',0);
})

document.getElementById('storage-512gb').addEventListener('click',function(){
    prizeAmount('storage-cost',500);
})

document.getElementById('storage-1tb').addEventListener('click',function(){
    prizeAmount('storage-cost',1000);
})

document.getElementById('normal-delivery').addEventListener('click',function(){
    prizeAmount('delivery-charge',0);
})

document.getElementById('express-delivery').addEventListener('click',function(){
    prizeAmount('delivery-charge',20);
})