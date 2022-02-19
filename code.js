var images = ["🔥", "💧", "⚡", "❄", "🌩", "🌌"];

function randomImageSlot(){
    var random = Math.floor(Math.random() * 5);
    document.getElementById("image1").innerText = images[random];
    random = Math.floor(Math.random() * 5);
    document.getElementById("image2").innerText = images[random];
    random = Math.floor(Math.random() * 5);
    document.getElementById("image3").innerText = images[random];
}