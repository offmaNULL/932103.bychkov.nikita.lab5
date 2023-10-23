
function set_opacity()
{
    document.querySelectorAll('.news').forEach(element => {
        element.style.opacity = "0.4";
        element.style.pointerEvents = "none";
    });
}

function reset_opacity()
{
    document.querySelectorAll('.news').forEach(element => {
        element.style.opacity = "1";
        element.style.pointerEvents = "all";
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll(".close").forEach(element => {
        element.addEventListener("click", function (){
            document.querySelectorAll(".btn1Txt, .btn2Txt, .btn3Txt").forEach(element => {
            element.style.display = "none";
            });
            reset_opacity();
        });
    });   
    document.querySelector(".btn1").addEventListener("click",function (){
        document.querySelector(".btn1Txt").style.display = "block";
        set_opacity();
    });
    document.querySelector(".btn2").addEventListener("click",function (){
        document.querySelector(".btn2Txt").style.display = "block";
        set_opacity();
    });
    document.querySelector(".btn3").addEventListener("click",function (){
        document.querySelector(".btn3Txt").style.display = "block";
        set_opacity();
    });
});