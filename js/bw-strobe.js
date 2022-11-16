var click_body = document.getElementById("click-body");             // To open menu on body click
var is_On_Off = document.getElementById("on_off_switch").checked;   // To check if strobe is On/Off
var SpeedSlider = document.getElementById("SpeedRange");            // Slider to adjust speed



//--------------------------------------------------------------------------- Enables the BW STROBE effect on body element
var ticker = 0

var bodyElement = document.querySelector("body");
document.body.style.backgroundColor = "#808080"
 
function change_Background() {  
    ticker++;
     
    if (ticker > 50 - SpeedSlider.value) {
        if (document.body.style.backgroundColor == "black") {
            document.body.style.backgroundColor = "white";
        } else {
            document.body.style.backgroundColor = "black";
        }
        ticker = 0
    }
    Change_BG = requestAnimationFrame(change_Background);
}

//--------------------------------------------------------------------- Start/Stop strobe (on click of Power Button)
function Strobe_On_Off() {
    if(is_On_Off == true){
        cancelAnimationFrame(Change_BG)
        SpeedSlider.style.backgroundColor = "#808080"
        document.body.style.backgroundColor = "#808080"
    } else {
        change_Background()
        SpeedSlider.style.backgroundColor = "#F9F6EE"
    }
    is_On_Off = !is_On_Off
}

//--------------------------------------------------------------------------------------- Open and Close nav on click
var NavMenu = true

click_body.addEventListener("click", SideNavToggle);

function SideNavToggle() {
    if(NavMenu == true) {
        closeNav();
        NavMenu = false;
    }else{
        openNav();
        NavMenu = true;
    }
}

// -------------------------------------------------------------------------------------- Open and Close nav function
function openNav() {
    document.getElementById("mySidenav").style.left = "0";
    document.getElementById("home-button").style.right = "15px";
    NavMenu = true;
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-330px";
    document.getElementById("home-button").style.right = "-50px";
    NavMenu = false;
}
