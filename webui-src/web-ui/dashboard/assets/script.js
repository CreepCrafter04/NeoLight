// NeoLight Dashboard Script: nl-ui-v0.1 //

minHeight = 600;

setInterval(()=>{
    document.getElementById("test").innerHTML = Math.floor(visualViewport.width);
},100)

window.onresize = checkVpHeight;
window.onload = checkVpHeight;

function checkVpHeight(){
    if(visualViewport.height < minHeight){
        document.getElementById("app-overlay").style.display = "flex";
        document.getElementById("app-overlay-req").innerText = "width: any (300+ recommended), height: "+minHeight+"+";
        document.getElementById("app-overlay-cur").innerText = "width: "+Math.floor(visualViewport.width)+", height: "+visualViewport.height;
    }
    else{
        document.getElementById("app-overlay").style.display = ""
    }
}