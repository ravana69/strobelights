var click_body = document.getElementById("click-body");           // To open menu on body click
var is_On_Off = document.getElementById("on_off_switch").checked; // To check if strobe is On/Off

// Slider to adjust speed
var SpeedSlider = document.getElementById("SpeedRange");

// bodyElement variable to change background of body
var bodyElement = document.querySelector("body"); 
// Start page with random colour on body
document.body.style.backgroundColor = getRandomColor();

// Start with RandomColour Strobe as default when switch is turned on
var RandomBool = true
var CustomBool = false
var DiscoBool = false

//-----------------------------------------------------------------------------------------------------------------------------------------
// Square Theme Colours
var ThemeElement1 = document.querySelector(".square1");
var ThemeElement2 = document.querySelector(".square2");
var ThemeElement3 = document.querySelector(".square3");
var ThemeElement4 = document.querySelector(".square4");
var ThemeElement5 = document.querySelector(".square5");

var delay = 0;
var Ambient_ticker = 0;
var Hue = Math.floor(Math.random() * (361))

function ChangeThemeColors() {
    delay++;
    
    if (delay > 8) {
        ThemeElement1.style.backgroundColor = getCustomColor();
        ThemeElement2.style.backgroundColor = getRandomColor();
        ThemeElement3.style.backgroundColor = getDiscoColor();
        ThemeElement4.style.backgroundColor = getBWColor();
        
        delay = 0;
    }

    // Ambient Color
    Ambient_ticker++;
     
    if (Ambient_ticker > 1) {
        Hue += 1;
        Ambient_ticker = 0
        if (Hue == 360){
            Hue = 0
        }
    }
    ThemeElement5.style.backgroundColor = 'hsl(' + Hue + ', 55%, 40%)';


    requestAnimationFrame(ChangeThemeColors);
}           
ChangeThemeColors();
//-----------------------------------------------------------------------------------------------------------------------------------------
// Open and Close Menu on click
var NavMenu = true
click_body.addEventListener("click", ShowElements);
function ShowElements() {
    if(NavMenu == true) {
        closeNav();
        NavMenu = false;
    }else{
        openNav();
        NavMenu = true;
    }
}
//-----------------------------------------------------------------------------------------------------------------------------------------
// Open and Close nav function
function openNav() {
document.getElementById("mySidenav").style.width = "280px";
document.getElementById("mySidenav").style.padding = "50px 3% 0 3%";

document.getElementById("Right_mySidenav").style.width = "125px";
}
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.getElementById("mySidenav").style.padding = "50px 0 0 0";

document.getElementById("Right_mySidenav").style.width = "0";
}
//-----------------------------------------------------------------------------------------------------------------------------------------

// Switch Strobes on and off
function Start_Strobe() {
    if(CustomBool == true){
        Custom();
    }
    if(RandomBool == true){
       Random();
    }
    if(DiscoBool == true){
        Disco();
    }
}

function Stop_Strobe() {
    if(CustomBool == true){
        cancelAnimationFrame(CustomBG)
    }
    if(RandomBool == true){
        cancelAnimationFrame(RandomBG)
    }
    if(DiscoBool == true){
        cancelAnimationFrame(DiscoBG)
    }
}

Fullscreen_Btn = document.getElementById('Fullscreen-Btn')
const Colours = document.querySelectorAll('.dot_switch span');
function Strobe_On_Off() {
    if(is_On_Off == true){
        Stop_Strobe();
        SpeedSlider.style.background = "#808080"
        
        ThemeElement1.style.border = "solid grey";
        ThemeElement1.style.borderWidth = "3px";
        
        ThemeElement2.style.border = "solid grey";
        ThemeElement2.style.borderWidth = "3px";
        
        ThemeElement3.style.border = "solid grey";
        ThemeElement3.style.borderWidth = "3px";

        Fullscreen_Btn.style.border = "solid grey"

        Colours.forEach(colour => {
            colour.style.border = "solid thin grey";
            colour.style.borderWidth = "3px"
          });

        
    } else {
        Start_Strobe();
        SpeedSlider.style.background = "#fff"

        ThemeElement1.style.border = "solid #F9F6EE";
        ThemeElement1.style.borderWidth = "3px";
        
        ThemeElement2.style.border = "solid #F9F6EE";
        ThemeElement2.style.borderWidth = "3px";
        
        ThemeElement3.style.border = "solid #F9F6EE";  
        ThemeElement3.style.borderWidth = "3px";

        Fullscreen_Btn.style.border = "solid #F9F6EE"
        
        Colours.forEach(colour => {
            colour.style.border = "solid thin #F9F6EE";
            colour.style.borderWidth = "3px"
          });

    }
    is_On_Off = !is_On_Off
}

//-----------------------------------------------------------------------------------------------------------------------------------------
// Change Custom Theme background
var CustomTimer = 0;
function CustomClick() {
    if(RandomBool == true){
        cancelAnimationFrame(RandomBG)}  
    if(DiscoBool == true) {
        cancelAnimationFrame(DiscoBG)
    }
    
    if(CustomBool == true) {
        if(is_On_Off == false){
            document.body.style.backgroundColor = getCustomColor();
        }
    }
    else {
    CustomBool = true
    RandomBool = false
    DiscoBool = false
  
    if(is_On_Off == true){
        Custom();
    }
    if(is_On_Off == false){
        document.body.style.backgroundColor = getCustomColor();
    }
}
}
function Custom() {
    CustomTimer++;
     
    if (CustomTimer > 50 - SpeedSlider.value) {
        document.body.style.backgroundColor = getCustomColor()
        CustomTimer = 0
    }
    CustomBG = requestAnimationFrame(Custom);
}

//-----------------------------------------------------------------------------------------------------------------------------------------
// Change Random Theme background
var RandomTimer = 0;
function RandomClick() {
    if(CustomBool == true){
        cancelAnimationFrame(CustomBG)}  
    if(DiscoBool == true) {
        cancelAnimationFrame(DiscoBG)
    }
    if (RandomBool == true) {
        if(is_On_Off == false){
            document.body.style.backgroundColor = getRandomColor();
        }
    }
    else {
    CustomBool = false
    RandomBool = true
    DiscoBool = false

    if(is_On_Off == true){
        Random();
    }
    if(is_On_Off == false){
        document.body.style.backgroundColor = getRandomColor();
    }
}
}
function Random() {
    RandomTimer++;
     
    if (RandomTimer > 50 - SpeedSlider.value) {
        document.body.style.backgroundColor = getRandomColor()
        RandomTimer = 0
    }
    RandomBG = requestAnimationFrame(Random);
}

//-----------------------------------------------------------------------------------------------------------------------------------------
// Change Disco Theme background
var DiscoTimer = 0;
function DiscoClick() {
    if(CustomBool == true){
        cancelAnimationFrame(CustomBG)}  
    if(RandomBool == true) {
        cancelAnimationFrame(RandomBG)
    }
    if (DiscoBool == true) { 
        if(is_On_Off == false){
            document.body.style.backgroundColor = getDiscoColor();
    }}

    else {
        CustomBool = false
        RandomBool = false
        DiscoBool = true

    if(is_On_Off == true){
        Disco();
    }
    if(is_On_Off == false){
        document.body.style.backgroundColor = getDiscoColor();
    }
}
}
function Disco() {
    DiscoTimer++;
     
    if (DiscoTimer > 50 - SpeedSlider.value) {
        document.body.style.backgroundColor = getDiscoColor()
        DiscoTimer = 0
    }
    DiscoBG = requestAnimationFrame(Disco);
}

//-----------------------------------------------------------------------------------------------------------------------------------------
var Custom_ticker = 0;
var Disco_ticker = 0;
function getCustomList(){
    var red = document.getElementById("switch1").checked;
    var blue = document.getElementById("switch2").checked;
    var yellow = document.getElementById("switch3").checked;
    var lightgreen = document.getElementById("switch7").checked;
    
    var green = document.getElementById("switch4").checked;
    var orange = document.getElementById("switch5").checked;
    var purple = document.getElementById("switch6").checked;
    var pink = document.getElementById("switch8").checked;

    var List = Array()
    
    if(red == true){
        List.push("#FF0000")
    }
    if(blue == true){
        List.push("#0000FF")
    }
    if(yellow == true){
        List.push("#FFFF00")
    }
    if(green == true){
        List.push("#008000")
    }
    if(orange == true){
        List.push("#FFA500")
    }
    if(purple == true){
        List.push("#800080")
    }
    if(pink == true){
        List.push("#ff3edf")
    }
    if(lightgreen == true){
        List.push("#48ff3e")
    }

    var Max = List.length

    return List
}

// Returns any Custom Color
function getCustomColor() {
    List = getCustomList();
    
    if(List.length == 0){
        var colour = "#808080" 
    }else{
        var colour = List[Custom_ticker]
        Custom_ticker ++;
        
        if(Custom_ticker >= List.length){
            Custom_ticker = 0;
        }
    }
    return colour
}
// Returns any Random Color
function getRandomColor() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    
    var hexR = r.toString(16);
    var hexG = g.toString(16);
    var hexB = b.toString(16);
    
    if (hexR.length == 1) {
        hexR = "0" + hexR;
    }
    
    if (hexG.length == 1) {
        hexG = "0" + hexG;
    }

    if (hexB.length == 1) {
        hexB = "0" + hexB;
    }

    var hexColor = "#" + hexR + hexG + hexB;

    return hexColor.toUpperCase()
}
// Returns Disco Color
function getDiscoColor() {
    var Disco_Colours = Array("#0FC0FC", "#7B1DAF", "#FF2FB9", "#D4FF47", "#FF9B03", "#FF3059", "#30FF83", "#9755EC", "#55ECBF", "#78F915") 
    
    var Disco_Random = Disco_Colours[Disco_ticker]
    Disco_ticker ++;
    
    if(Disco_ticker == Disco_Colours.length){
        Disco_ticker = 0;
    }

    return Disco_Random
}
// Returns BW Color
var Color = "black"
function getBWColor() {
    if (Color == "black") {
        Color = "white"
        return Color;
    } else {
        Color = "black"
        return Color;
    }
}

//-----------------------------------------------------------------------------------------------------------------------------------------
// Fullscreen mode
function openFullscreen() {
    if (Fullscreen_Btn.innerText == "Fullscreen") {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
            document.documentElement.msRequestFullscreen();
        }
        Fullscreen_Btn.innerText = "Exit";
    } else {
        if (document.exitFullscreen()) {
            document.exitFullscreen();
        } else if (document.documentElement.webkitExitFullscreen) { /* Safari */
            document.documentElement.webkitExitFullscreen();
        } else if (document.documentElement.msExitFullscreen) { /* IE11 */
            document.documentElement.msExitFullscreen();
        }
        Fullscreen_Btn.innerText = "Fullscreen";
    }
}

if(window.innerWidth == screen.width && window.innerHeight == screen.height) {
    Fullscreen_Btn.innerText == "Exit"
}
//-----------------------------------------------------------------------------------------------------------------------------------------




    

