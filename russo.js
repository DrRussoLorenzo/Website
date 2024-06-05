// Google search starts
src="https://kit.fontawesome.com/a076d05399.js"; crossorigin="anonymous";

document.getElementById('google-search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting as a regular form
    const searchInput = document.getElementById('google-search-input');
    const searchTerm = searchInput.value.trim();

    if (searchTerm) {
        window.open(`https://www.google.com/search?q=${searchTerm}`, '_blank');
    }
});
// Google search end

// Spotify starts
document.getElementById('button_spoti1').addEventListener('click', function() {
    var player = document.getElementById('spotify-player');
    player.src = 'https://open.spotify.com/embed/playlist/5V4OxpD2iPTTI3hI9gROse?utm_source=generator';
});

document.getElementById('button_spoti2').addEventListener('click', function() {
    var player = document.getElementById('spotify-player');
    player.src = 'https://open.spotify.com/embed/playlist/6zXb0gn4pxGo2CeHA9ixbR?utm_source=generator';
});

document.getElementById('button_spoti3').addEventListener('click', function() {
    var player = document.getElementById('spotify-player');
    player.src = 'https://open.spotify.com/embed/playlist/2l320g0qCTOq23xemCH91h?utm_source=generator';
});

document.getElementById('button_spoti4').addEventListener('click', function() {
    var player = document.getElementById('spotify-player');
    player.src = 'https://open.spotify.com/embed/playlist/2v1Hd7Z9jXPgopWFA4f49L?utm_source=generator';
});

document.getElementById('button_spoti5').addEventListener('click', function() {
    var player = document.getElementById('spotify-player');
    player.src = 'https://open.spotify.com/embed/playlist/0oSRMiQjSqwq5apRiap7su?utm_source=generator';
});

document.getElementById('button_spoti6').addEventListener('click', function() {
    var player = document.getElementById('spotify-player');
    player.src = 'https://open.spotify.com/embed/playlist/4rEjfaJyhxEirG7MrW28ei?utm_source=generator';
});
// Spotify end

// Clock starts
function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var clock = document.getElementById('clock');
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}

setInterval(updateClock, 1000);
//  Clock ends

//  Weather starts
function getWeatherData(location) {
    const apiKey = "6eb1180161eccb06843669dbee0f87b3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => {
        const weatherData = {
            temperature: data.main.temp,
            condition: data.weather[0].main,
            location: data.name,
        };
        return weatherData;
    });
}
function updateUI(weatherData) {
    const temperature = document.querySelector("#temperature");
    const condition = document.querySelector("#condition");
    const location = document.querySelector("#location");

    temperature.textContent = `${weatherData.temperature}°C`;
    condition.textContent = weatherData.condition;
    location.textContent = weatherData.location;
}

const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector("#search-bar");

searchBtn.addEventListener("click", () => {
    const location = searchBar.value;
    getWeatherData(location)
        .then(weatherData => {
        updateUI(weatherData);
    })
    .catch(error => {
        console.log(error);
    });
});
// Weather ends