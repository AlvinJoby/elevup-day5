let apiKey = "1e3e8f230b6064d27976e41163a82b77";
let searchinput = document.querySelector(`.searchinput`);

async function search(query) {
  // Support "city, state, country" style input
  let parts = query.split(",").map(s => s.trim());
  let city = parts[0] || "";
  let state = parts[1] || "";
  let country = parts[2] || "";

  let qParam = [city, state, country].filter(Boolean).join(",");

  let url = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${encodeURIComponent(qParam)}&appid=${apiKey}`
  );

  if (url.ok) {
    let data = await url.json();
    console.log(data);

    let box = document.querySelector(".return");
    box.style.display = "block";

    document.querySelector(".message").style.display = "none";
    document.querySelector(".error-message").style.display = "none";

    let weatherImg = document.querySelector(".weather-img");
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".weather-temp").innerHTML = Math.floor(data.main.temp) + "°";
    document.querySelector(".wind").innerHTML = Math.floor(data.wind.speed) + " m/s";
    document.querySelector(".pressure").innerHTML = Math.floor(data.main.pressure) + " hPa";
    document.querySelector(".humidity").innerHTML = Math.floor(data.main.humidity) + "%";
    document.querySelector(".sunrise").innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    document.querySelector(".sunset").innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    // Visibility (API returns metres, convert to km)
    let visEl = document.querySelector(".visibility");
    if (visEl) {
      visEl.innerHTML = data.visibility ? (data.visibility / 1000).toFixed(1) + " km" : "N/A";
    }

    const condition = data.weather[0].main;
    const imgMap = {
      Rain: "img/rain.png",
      Clear: "img/sun.png",
      Snow: "img/snow.png",
      Clouds: "img/cloud.png",
      Smoke: "img/cloud.png",
      Mist: "img/mist.png",
      Fog: "img/mist.png",
      Haze: "img/haze.png",
      Thunderstorm: "img/thunderstorm.png",
    };
    weatherImg.src = imgMap[condition] || "img/sun.png";

  } else {
    document.querySelector(".return").style.display = "none";
    document.querySelector(".message").style.display = "none";
    document.querySelector(".error-message").style.display = "block";
  }
}

searchinput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13 || event.which === 13) {
    search(searchinput.value);
  }
});
