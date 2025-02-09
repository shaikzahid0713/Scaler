const weekDay = {
   0: "Sunday",
   1: "Monday",
   2: "Tuesday",
   3: "Wednesday",
   4: "Thursday",
   5: "Friday",
   6: "Saturday"
}


let search_btn = document.querySelector('button');
search_btn.addEventListener('click', function(event) {
   event.preventDefault();
   const targetCity = document.querySelector('.searchField').value;
   console.log(targetCity);
   fetchData(targetCity);
})
 

async function fetchData(targetCity) {
   let getUrl = `https://api.weatherapi.com/v1/current.json?key=ae078b45e77a4b70a31120233253101&q=${targetCity}&aqi=no`;
   let getData = await fetch(getUrl);
   let weatherApiData = await getData.json();
   console.log(weatherApiData);

   updateElements(weatherApiData.location.name, weatherApiData.location.localtime, weatherApiData.current.temp_f, weatherApiData.current.condition.icon, weatherApiData.current.condition.text);
}


function updateElements(getCity, getTime, getTemp, getImage, getWeatherCondition) {
   const city = document.querySelector('.city');
   const time = document.querySelector('.time');
   const temp = document.querySelector('.temp');
   const image = document.querySelector('.weather_condition img');
   const weatherCondition = document.querySelector('.weather_condition span');

   city.innerText = getCity;
   time.innerText = updateTime(getTime);
   temp.innerText = getTemp;
   weatherCondition.innerText = getWeatherCondition;
   image.src = getImage;
}

function updateTime(target) {
   let finalTime = target.split(' ')[1];
   let date = target.split(' ')[0];
   let day = new Date(date).getDay();
   day = weekDay[day];

   return `${finalTime} ${day} ${date}`;
}