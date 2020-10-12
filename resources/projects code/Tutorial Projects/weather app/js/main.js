window.addEventListener('load', ()=> {
  let long;
  let lat;

  let temperatureDescription = document.querySelector(".temperature-description");
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationName = document.querySelector(".location-name");
  let weatherIcon = document.querySelector(".weather-icon");

  if(navigator.geolocation){
    //Get the current position of the device
    navigator.geolocation.getCurrentPosition(position => {
      //Location latitude and longitude coordinates
      long = position.coords.longitude;
      lat = position.coords.latitude;

      //GET request
      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=a7945e759b4784693427e59a9911052a`;
      fetch(api)
        //Return JSON
        .then(response => {
          return response.json();
        })
        //Data from json
        .then(data => {
          const location = data.name;
          const temperature = data.main.temp;
          const description = data.weather[0].description;
          const iconCode = data.weather[0].icon;
          const iconURL = `http://openweathermap.org/img/wn/${iconCode}@2x.png`

          //Assign json data to variables
          locationName.textContent = location;
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = description;

          //https://stackoverflow.com/questions/46618917/how-do-i-insert-an-image-into-html-with-javascript
          let iconURLString = `<img src="${iconURL}">`;
          weatherIcon.insertAdjacentHTML('beforeend', iconURLString);

          // Test
          // console.log(data);
          // console.log(position);
          // console.log(lat);
          // console.log(long);
          // console.log(location);
          // console.log(temperature);
          // console.log(description);
          // console.log(iconCode);
          // console.log(iconURL);
        })
    })
  }
});