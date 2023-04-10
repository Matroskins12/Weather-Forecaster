let weather_div = document.querySelector('.weather')
let search_input = document.querySelector('.search_input')
let search_button = document.querySelector('.search_button')

search_button.addEventListener('click', search_city)
function search_city() {
    let input_value = search_input.value
    all(input_value)
}
function all(input_value) {
  console.log(input_value);
  let usl_1 = (input_value)? input_value : 'Tiraspol' 
    let city = 'Tiraspol'

// let refer = 'https://api.openweathermap.org/data/3.0/onecall?Tiraspol&appid=eab7c6660f088e8cb4a1a2b8a69d39f3'
let refer_2 = `https://api.openweathermap.org/data/2.5/weather?q=${usl_1}&appid=eab7c6660f088e8cb4a1a2b8a69d39f3`
let myRequest = new XMLHttpRequest();
myRequest.open('GET', refer_2)
myRequest.responseType = 'json'
myRequest.onload = function () {
    console.log(myRequest.response);
    console.log(myRequest.response.wind.speed);

    let temp = (myRequest.response.main.temp-273.15).toFixed(1)
    let temp_min = (myRequest.response.main.temp_min-273.15).toFixed(1)
    let temp_max = (myRequest.response.main.temp_max-273.15).toFixed(1)

    let description = myRequest.response.weather[0].description
    let picture_id = myRequest.response.weather[0].icon

    let visibility = myRequest.response.visibility
    let humidity = myRequest.response.main.humidity
    
    let wind_speed = myRequest.response.wind.speed
    let wind_direction = myRequest.response.wind.deg

    let result = `
    <div class='weather_div'>
        <div class='city_name'>
            <p>${myRequest.response.name}</p>
        </div>
        <div class='weather_show'>
            <img src='./img/${picture_id}.png' class='picture'>
        </div>
        <div class='weather_description'>
            <p>${description}</p>
        </div>
        <div class='weather_temp'>
            <p class='main_temp'>${temp}°C</p>
            <p>${temp_min}°C/${temp_max}°C</p>
        </div>
        <div class='weather_other_information'>
            <p>visibility on the road, ft:<br><span class='visibility_1'>${visibility}</span></p>
            <p>humidity, %:${humidity}</p>
        </div>
        <div class='wind_weather'>
            <p class='wind_speed'>wind speed, mph:${wind_speed}</p>
            <p class='wind_direction'>${wind_direction}</p>
        </div>
    </div>
    `

    weather_div.innerHTML = result 
}
myRequest.send()
}
all()
