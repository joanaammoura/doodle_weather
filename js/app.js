function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

let temperatureElements = document.querySelectorAll('.temperature');

let buttonRefresh = document.querySelectorAll('#refresh');

buttonRefresh.addEventListener('click', function () { 
    temperatureElements.forEach(function(getRandomInt, index) {
    temperatureElements.innerHTML = getRandomInt(-20, 50) + ' ºC');
    });
});