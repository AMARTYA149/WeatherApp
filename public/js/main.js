const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");
let t_key = "b14425a6554d189a2d7dc18a8e7d7263";

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  // alert("eh yep");
  if (cityVal === "") {
    city_name.innerText = `Please give city name before searching...`;
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=df8e6f88248f09190415815adb50cfcc`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      city_name.innerText = `Please enter right city name...`;
    }
  }
};

submitBtn.addEventListener("click", getInfo);
