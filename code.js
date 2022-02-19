var slotsImage = ["🔥", "💧", "⚡", "❄", "🌩", "🌌"];

var endedFakeRoll = new Event('endedRoll');
document.getElementById('container').addEventListener('endedRoll', ActivatePopUp);
for(let i = 1; i <= 3; i++){
    document.getElementById("imageUp"+i).innerHTML = slotsImage[Math.floor(Math.random()*5)];
    document.getElementById("imageDown"+i).innerHTML = slotsImage[Math.floor(Math.random()*5)];
    document.getElementById("imageSlot"+i).innerHTML = slotsImage[Math.floor(Math.random()*5)];
}

async function iniziaPartita(){
    document.getElementById('pop-up').style.display = 'none';
    changeSlotImage(document.getElementById("imageUp1"));
    changeSlotImage(document.getElementById("imageUp2"));
    await changeSlotImage(document.getElementById("imageUp3"));
    document.getElementById('container').dispatchEvent(endedFakeRoll);
}
async function changeSlotImage(div){
    var tmp = 1;
    for(let i = 0; i < 1000; i += tmp){
        await delay(i);
        tmp += tmp/3;
        rollDown();
        div.innerHTML = slotsImage[Math.floor(Math.random()*5)];
    }
}
function delay(time){
    return new Promise((resolve) =>{
        setTimeout(resolve ,time);
    });
}
function rollDown(){
    for(let i = 1; i <= 3; i++){
        document.getElementById("imageDown"+i).innerHTML = document.getElementById("imageSlot"+i).innerHTML;
        document.getElementById("imageSlot"+i).innerHTML = document.getElementById("imageUp"+i).innerHTML;
    }   
}
function ActivatePopUp(){
    document.getElementById('pop-up').innerHTML = Risultato();
    document.getElementById('pop-up').style.display = 'block';
}
function Risultato(){
    if(document.getElementById("imageSlot1").innerHTML == document.getElementById("imageSlot2").innerHTML && document.getElementById("imageSlot2").innerHTML == document.getElementById("imageSlot3").innerHTML){
        return "JACKPOT";
    }
    else if(document.getElementById("imageSlot1").innerHTML == document.getElementById("imageSlot2").innerHTML || document.getElementById("imageSlot2").innerHTML == document.getElementById("imageSlot3").innerHTML || document.getElementById("imageSlot1").innerHTML == document.getElementById("imageSlot3").innerHTML){
        return "HAI VINTO";
    }
    else{
        return "HAI PERSO";
    }
}

