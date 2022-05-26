
function notReadyAlert() {
    alert('Sorry, not ready yer!\n Извините, еще не готово!');
    return false;
}

function search() {
let name = document.getElementById('search').value;
let productNumber = null;
if (name == 'Арбуз') {
    productNumber = 0;
} else if (name == 'Ананас') {
    productNumber = 1;  
} else if (name == 'Яблоки') {
    productNumber = 2; 
} else {
    alert('Товар не найден');
}

let cards = document.getElementsByClassName('card');
let card = cards[productNumber];
card.style.border = '1px dashed red';
card.style.backgroundcolor = 'yellow';
setTimeout(function() {
    card.style.border = 'none';
    card.style.backgroundcolor = '';
}, 2000);
}

function loaded() {
let searchbox = document.getElementById('search');
searchbox.addEventListener('keydown', function (key) {
    if(key.key == 'Enter')
        search();
});
}