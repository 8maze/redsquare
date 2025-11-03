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
            if(topPos < 400) topPos += schrittweite;   // überprüfung ob das quadrat im container bleibt von der höhe
            break;
        case 'links':
            if (leftPos > 0) leftPos -=schrittweite;
            break;
        case 'rechts':
            if (leftPos < 400) leftPos +=schrittweite;  // überprüft ob das quadrat von der breite im quadrat bleibt
            break;       

    }
        // überschreibt das css für den Moment
        redsquare.style.top = topPos + 'px';
    redsquare.style.left = leftPos + 'px';

}








/*
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