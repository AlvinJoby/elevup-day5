# ⛅ SkyCheck — Weather App

> A clean, mobile-first weather app delivering real-time conditions, a 6-day forecast, and a global city explorer — powered by the OpenWeatherMap API.

**Built by [Alvin Joby](https://github.com/alvinjoby) · ElevUp Day 5**

[![GitHub Repo](https://img.shields.io/badge/GitHub-alvinjoby%2Felevup--day5-181717?style=flat&logo=github)](https://github.com/alvinjoby/elevup-day5)

---

## ✨ Features

| Feature | Description |
|---|---|
| 📍 Auto Location | Detects your GPS coordinates and loads local weather instantly on launch |
| 📅 6-Day Forecast | Horizontally scrollable forecast cards with daily temperature and conditions |
| 🔍 City Search | Search any city worldwide — supports `city, state, country` for precision |
| 🌍 World Explorer | Browse weather for multiple cities at once and add your own to the board |
| 👁 Visibility | Search results include visibility distance alongside wind, pressure & humidity |
| 📱 Mobile-First | Responsive layout with a fixed bottom nav bar optimised for phones |

---

## 🛠 Technologies Used

- **Frontend** — HTML5, CSS3, Vanilla JavaScript
- **API** — [OpenWeatherMap](https://openweathermap.org/)
- **Icons** — [Font Awesome 6](https://fontawesome.com/)
- **Fonts** — [Google Fonts — Rubik](https://fonts.google.com/specimen/Rubik)

---

## 🔌 API Endpoints Used

| Purpose | Endpoint Docs |
|---|---|
| Reverse geocoding (lat/lon → city name) | [geo/1.0/reverse](https://openweathermap.org/api/geocoding-api) |
| Current weather by city name | [data/2.5/weather](https://openweathermap.org/current) |
| 5-day / 3-hour forecast | [data/2.5/forecast](https://openweathermap.org/forecast5) |

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A free API key from [OpenWeatherMap](https://home.openweathermap.org/api_keys)

### Installation

**1. Clone the repository**

```sh
git clone https://github.com/alvinjoby/elevup-day5.git
cd elevup-day5
```

**2. Get your API key**

Sign up at [OpenWeatherMap](https://home.openweathermap.org/api_keys) and copy your key from the dashboard. The free tier covers all features used in this app.

**3. Add your API key**

Open `js/main.js`, `js/search.js`, and `js/world.js`. Replace the placeholder at the top of each file:

```javascript
let apiKey = "YOUR_API_KEY_HERE";
```

**4. Run the app**

Open `index.html` in any modern browser. When prompted, allow location access so the app can detect your city automatically.

---

## 📖 How to Use

### 🏠 Home Tab
Opens automatically to your current location's weather. Displays temperature, humidity, feels-like temperature, and a 6-day scrollable forecast.

### 🔍 Search Tab
Type a city name and press `Enter`. For cities with common names, use the format:
```
London, England, GB
```

### 🌍 Explore Tab
Preloaded with global cities (London, Paris, New York, Mumbai, Tokyo, Dubai, Sydney). Tap the **＋** button to search and add any city to the board.

---

## 📁 Project Structure

```
elevup-day5/
├── index.html        # Home — current location weather
├── search.html       # Search — look up any city
├── world.html        # Explore — multi-city board
├── css/
│   ├── style.css     # Home page styles
│   ├── search.css    # Search page styles
│   └── world.css     # Explore page styles
├── js/
│   ├── main.js       # Home page logic
│   ├── search.js     # Search page logic
│   └── world.js      # Explore page logic
├── img/              # Weather condition icons
└── README.md
```

---

## 👤 Contact

**Alvin Joby**

[![GitHub](https://img.shields.io/badge/GitHub-alvinjoby-181717?style=flat&logo=github)](https://github.com/alvinjoby)
[![Repo](https://img.shields.io/badge/Repo-elevup--day5-blue?style=flat&logo=github)](https://github.com/alvinjoby/elevup-day5)

---

<p align="center">Built with ☁️ by <a href="https://github.com/alvinjoby">Alvin Joby</a> · Powered by <a href="https://openweathermap.org/">OpenWeatherMap</a></p>
