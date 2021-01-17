const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp_real_val");

const dataHide = document.querySelector(".middle_layer");
let t_key = "b14425a6554d189a2d7dc18a8e7d7263";

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  // alert("eh yep");
  if (cityVal === "") {
    city_name.innerText = `Please give city name before searching...`;
    dataHide.classList.add("data_hide");
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=df8e6f88248f09190415815adb50cfcc`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      city_name.innerText = `${cityVal}, ${arrData[0].sys.country}`;
      temp.innerText = arrData[0].main.temp;

      const tempMood = arrData[0].weather[0].main;
      //condition to check sunny or cloudy icon
      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: #eccc68'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color: #f1f2f6'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: #eccc68'></i>";
      }
      dataHide.classList.remove("data_hide");
    } catch (error) {
      city_name.innerText = `Please enter right city name...`;
      dataHide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
