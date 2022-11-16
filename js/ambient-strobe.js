var click_body = document.getElementById("click-body");           // To open menu on body click
var is_On_Off = document.getElementById("on_off_switch").checked; // To check if strobe is On/Off
var slider = document.querySelector(".slider")                    // Identify all sliders to change speed, saturation and lightness
 
// To adjust speed slider
var SpeedSlider = document.getElementById("SpeedRange");
// To adjust saturation slider
var SaturationSlider = document.getElementById("SaturationRange");
// To adjust lightness slider
var LightnessSlider = document.getElementById("LightnessRange");

//-----------------------------------------------------------------------------------------------------------------------------------------
// Change ambient colours of background
var ticker = 0
var Hue = Math.floor(Math.random() * (361)) // Get random ambient color everytime

var bodyElement = document.querySelector("body");
bodyElement.style.backgroundColor = 'hsl(' + Hue + ', 55%, 60%)';
 
function change_Background() {  
    ticker++;
     
    if (ticker > 50 - SpeedSlider.value) {
        Hue += 1;
        ticker = 0
        if (Hue == 360){
            Hue = 0
        }
    }
    bodyElement.style.backgroundColor = 'hsl(' + Hue + ',' + SaturationSlider.value + '%,' + LightnessSlider.value + '%)';
    Change_BG = requestAnimationFrame(change_Background);
}

//-----------------------------------------------------------------------------------------------------------------------------------------
// Start/Stop strobe (on click of Power Button)
function Strobe_On_Off() {
    if(is_On_Off == true){
        cancelAnimationFrame(Change_BG)
        SpeedSlider.style.backgroundColor = "#808080"
        SaturationSlider.style.backgroundColor = "#808080"
        LightnessSlider.style.backgroundColor = "#808080"
    } else {
        change_Background()
        SpeedSlider.style.backgroundColor = "#F9F6EE"
        SaturationSlider.style.backgroundColor = "#F9F6EE"
        LightnessSlider.style.backgroundColor = "#F9F6EE"
    }
    is_On_Off = !is_On_Off
}

//-----------------------------------------------------------------------------------------------------------------------------------------
// Open and Close Menu on click
var NavMenu = false
click_body.addEventListener("click", ShowElements);

function ShowElements() {
    if(NavMenu == true) {
        closeNav();
        document.getElementById("backbtn").style.display = "none"
        NavMenu = false;
    }else{
        openNav();
        document.getElementById("backbtn").style.display = "block"
        NavMenu = true;
    }
}

// Open and Close nav function
function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
    document.getElementById("mySidenav").style.padding = "50px 3% 0 3%";

    NavMenu = true;
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.padding = "50px 0 0 0";

    NavMenu = false;
}
