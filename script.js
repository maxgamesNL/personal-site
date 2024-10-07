let epilepsie;
let playing = false;
document.getElementById("iframe_game_play").style.display = "none"; 
Start();

document.addEventListener('mousemove', (e) => {
    if(epilepsie){
        return;
    }
	let x = e.clientX;
    let y = e.clientY;
    console.log(x, y);
    document.body.style.backgroundColor = "rgb("+ 0 + "," + (y + 100) / 9 + ","+  (x + 100) / 12 +")";
});

document.getElementById("TTbutton").addEventListener("click", (e) => {
    if(epilepsie){
        epilepsie = false;
    }else{
        epilepsie = true;
    }
});
document.getElementById("playbutton").addEventListener("click", (e) => {
    if(playing){
        playing = false;
        document.getElementById("iframe_game_play").style.display = "none"; 
    }else{
        playing = true;
        document.getElementById("iframe_game_play").style.display = "block"; 
    }
});

window.setInterval(function(){
    if(!epilepsie){
        return;
    }
    console.log("epipepsi");
    document.body.style.backgroundColor = "rgb("+ Math.random()*255 + "," + Math.random()*255 + ","+  Math.random()*255 +")";
  }, 20);




setInterval(function(){
    console.log("Hello");
}, 100000);

function Start()
{
    epilepsie = false;
    document.getElementById("JsLoadChecker").innerHTML = "WOLK??";
}