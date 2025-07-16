let apiKey = "73e1dd639a25b09bff3a8009cf31482b";
let apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBox = document.getElementById("input");
let btnBox = document.getElementById("search-btn");

let weatherImg = document.getElementById("weather-Img");

async function weatherCheck(city) {
  let response = await fetch(apiURL + city + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);

  if (response.status === 404) {
    return alert("Invalid City Name");
  }
  document.getElementById("city-name").innerHTML = data.name;
  document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.getElementById("humidityy").innerHTML = data.main.humidity + "%";
  document.getElementById("wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main === "Clouds") {
    weatherImg.src = "images/cloudy.png";
  } else if (data.weather[0].main === "Clear") {
    weatherImg.src = "images/sun.png";
  } else if (data.weather[0].main === "Rain") {
    weatherImg.src = "images/weather(1).png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherImg.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherImg.src = "images/mist.png";
  }
}

btnBox.addEventListener("click", (event) => {
  event.preventDefault();
  if (searchBox.value === "") {
    return alert(`Please fill the City Name`);
  } else {
    weatherCheck(searchBox.value);
  }
});
