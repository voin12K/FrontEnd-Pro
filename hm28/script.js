function getWeather(city) {
    const apiKey = '5d066958a60d315387d9492393935c19';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            displayWeather(data);
        }
    };

    xhr.open('GET', apiUrl, true);
    xhr.send();
}

function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const pressure = data.main.pressure;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const windDirection = data.wind.deg;
    const weatherIconCode = data.weather[0].icon;

    document.getElementById('cityName').innerText = cityName;
    document.getElementById('temperature').innerText = `Температура: ${temperature}°C`;
    document.getElementById('pressure').innerText = `Тиск: ${pressure} hPa`;
    document.getElementById('description').innerText = `Опис: ${description}`;
    document.getElementById('humidity').innerText = `Вологість: ${humidity}%`;
    document.getElementById('wind').innerText = `Швидкість вітру: ${windSpeed} м/с, напрям: ${windDirection}°`;
    document.getElementById('weatherIcon').src = `http://openweathermap.org/img/w/${weatherIconCode}.png`;
}

getWeather('Lviv');
