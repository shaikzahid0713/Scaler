const weekDay = {
   0: "Sunday",
   1: "Monday",
   2: "Tuesday",
   3: "Wednesday",
   4: "Thursday",
   5: "Friday",
   6: "Saturday"
}


let search_btn = document.getElementById('search_city');
search_btn.addEventListener('click', function(event) {
   event.preventDefault();
   const targetCity = document.getElementById('city_name').value;
   console.log(targetCity);
   fetchData(targetCity);
})
 

async function fetchData(targetCity) {
   let getUrl = `https://api.weatherapi.com/v1/current.json?key=ae078b45e77a4b70a31120233253101&q=${targetCity}&aqi=no`;
   let getData = await fetch(getUrl);
   let actualData = await getData.json();
   console.log(actualData);

   updateElements(actualData.location.name, actualData.location.localtime, actualData.current.temp_f, actualData.current.condition.icon, actualData.current.condition.text);
}


function updateElements(getCity, getTime, getTemp, getImage, getWeatherCondition) {
   const city = document.getElementById('city');
   const time = document.getElementById('time');
   const temp = document.getElementById('temp');
   const image = document.getElementById('image');
   const weatherCondition = document.getElementById('condition');

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