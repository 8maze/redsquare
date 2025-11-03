const quadrat = document.getElementById('redsquare');
let topPos = 0;
let leftPos = 0;
const schrittweite = 10;

function woist (richtung){

       switch (richtung){
        case 'hoch':
            if(topPos >= 90) bool = true;     
            break;
        case 'runter':
            if(topPos <= 50) bool = true;
            break;
        case 'links':
            if (leftPos >= 90) bool = true;
            break;
        case 'rechts':
            if (leftPos <= 50) bool = true;
            break;       
    } 
    return bool;
}
 console.log (woist('runter'));

function bewegen(richtung){
    switch (richtung){
        case 'hoch':
            if(topPos > 0) topPos = topPos - schrittweite;
            break;
        case 'runter':
            topPos = topPos + schrittweite;   // überprüfung ob das quadrat im container bleibt von der höhe
            break;
        case 'links':
            if (leftPos > 0) leftPos -=schrittweite;
            break;
        case 'rechts':
            leftPos +=schrittweite;  // überprüft ob das quadrat von der breite im quadrat bleibt
            break;       

    } 
    
    console.log(topPos+"topPos")
    console.log(leftPos+"leftPos")
    console.log("--------------------")

 // überschreibt das css für den Moment
    redsquare.style.top = topPos + 'px';
    redsquare.style.left = leftPos + 'px';
   
}

//if(topPos > 30 && topPos < 90 && leftPos > 30 && leftPos > 90);

/* Backup Kopie
const quadrat = document.getElementById('redsquare');
let topPos = 0;
let leftPos = 0;
const schrittweite = 10;

function bewegen(richtung){
    switch (richtung){
        case 'hoch':
            if(topPos > 0) topPos -= schrittweite;
            break;
        case 'runter':
            if(topPos < 380) topPos += schrittweite;   // überprüfung ob das quadrat im container bleibt von der höhe
            break;
        case 'links':
            if (leftPos > 0) leftPos -=schrittweite;
            break;
        case 'rechts':
            if (leftPos < 380) leftPos +=schrittweite;  // überprüft ob das quadrat von der breite im quadrat bleibt
            break;       

    } 
    console.log(topPos+"topPos")
    console.log(leftPos+"leftpos")

        // überschreibt das css für den Moment
        redsquare.style.top = topPos + 'px';
    redsquare.style.left = leftPos + 'px';
*/



/* zweiter Versuch das interval einzubauen

const button = document.getElementById(btn);

let interval;
interval = setInterval(() => {

},100);
s

button.addEventListener("mouseup", () => {
    clearInterval(interval);
    console.log("button losgelassen");
});

button.addEventListener("mouseleave", () => {
    clearInterval(interval);
});
*/

/* erster Versuch den Interval einzubauen
function startAction(bewegen){
    intervalId = setInterval((){

    console.log("der Button wird gedrückt gehalten");
    
    },100)
}

function stopAction (bewegen) {
    clearIntervar(intervalId)
}
*/



/* erster Versuch das redsquare über den bildschirm zu bewegen

const quadrat = document.getElementById('redsquare');

const btndown = document.getElementById('btn_down');
const btnup = document.getElementById('btn_up');
const btnleft = document.getElementById('btn_left');
const btnright = document.getElementById('btn_right');

const schritt = 10;

btndown.addEventListener('click', () => {

    let aktuelleMargin = parseInt(quadrat.style.marginTop) || 0;
    quadrat.style.marginTop = '${aktuelleMargin + schritt}px';

});

btnup.addEventListener('click', () => {

    let aktuelleMargin = parseInt(quadrat.style.marginBottom) || 0;
    quadrat.style.marginBottom = '${aktuelleMargin + schritt}px';
});
*/