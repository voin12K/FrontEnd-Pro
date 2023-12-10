const imgElement = document.createElement('img');

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

imgElement.src = 'images/' + randomInteger(1, 9) +  '%20.jpg';

document.body.appendChild(imgElement);