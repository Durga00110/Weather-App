console.log("weather app ");

let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconfile;
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", (e) => {
  getweather(searchInput.value);
  searchInput.value = "";
});
const getweather = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=816fc52370298fadaa0d897502493cc9`,
      { mode: "cors" }
    );

    const weatherData = await response.json();
    console.log(weatherData);
    const { name } = weatherData;
    const main1 = weatherData.main;
    const { id, description } = weatherData.weather[0];
    loc.textContent = name;
    climate.textContent = description;
    tempvalue.textContent = Math.round(main1.feels_like - 273);

    if (id >= 200 && id <= 299) {
      tempicon.src = "./icons/thunder.svg";
    } else if (id >= 300 && id < 400) {
      tempicon.src = "./icons/cloudy-day-1.svg";
    } else if (id >= 500 && id < 600) {
      tempicon.src = "./icons/rainy-1.svg";
    } else if (id >= 600 && id < 700) {
      tempicon.src = "./icons/snowy-1.svg";
    } else if (id >= 700 && id < 800) {
      tempicon.src = "./icons/cloudy.svg";
    } else if (id >= 800) {
      tempicon.src = "./icons/day.svg";
    }
  } catch (error) {
    alert("city not found");
  }
};
