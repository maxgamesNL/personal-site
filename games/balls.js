var audio = new Audio('assets/songskibedie.mp3');
var audioisplaying = false;
addEventListener("click", (event) => {
    if(!audioisplaying){
        audio.play();
        audioisplaying = true;
    }
});
