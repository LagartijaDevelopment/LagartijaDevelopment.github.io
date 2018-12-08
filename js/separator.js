function getRandom() {
    return Math.round(Math.random());
}

var randomNumber = getRandom();
var separatorImages = ['home_itservice_be.png', 'home_itservice_be2.png'];

var imageToShow = separatorImages[randomNumber];
var imageUrl = 'images/'+imageToShow;

document.getElementById('separator-image').src = imageUrl;