
let weather = document.getElementById("weather");
let weatherWeek = document.getElementById("weatherWeek");

let b_url = `http://api.openweathermap.org/`;
let end_point = `data/2.5/weather`;
let week_endpoint = `data/2.5/forecast`


let key = `&appid=d0eb85f816dcca901fd9dddf4cad3e17`

let api_url = b_url+end_point+`?q=London`+key;

let week_api_url = b_url+week_endpoint+`?q=London`+key

document.getElementById("search")
.addEventListener("change", function(e){
    getWeather( b_url+end_point+`q=${e.target.value}`+key)
})



getWeather(api_url)

function getWeather(api_url){
    fetch(api_url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        showWeather(data)
    })
}


getWeatherWeek(week_api_url)

function getWeatherWeek(week_api_url){

    fetch(week_api_url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.list);
        showWeatherWeek(data.list);
    })
}


function showWeather(data){
    weather.innerHTML = `
        <div class="row g-4">
                <div class="col-6">
                    <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="" />
                   <br/> <span>${data.weather[0].main}</span>
                </div>
                <div class="col-6">
                    <b>${data.name}</b>
                    <br/>
                    <small>${data.weather[0].description}</small>
                </div>
                <div class="col-4">
                  <i class="bi bi-thermometer"></i>
                    <small>${(data.main.temp-273.15).toFixed(2)}</small>
                </div>
                <div class="col-4">
                <i class="bi bi-wind"></i>
                    <small>${data.wind.speed} m/s</small>
                </div>
                <div class="col-4">
                <i class="bi bi-moisture"></i>
                    <small>${data.main.humidity}</small>
                </div>
            </div>
    `
}


function showWeatherWeek(d){
 weatherWeek.innerHTML = ""
    d.map((data)=>{
        weatherWeek.innerHTML += `
        <div class="row g-4 shadow my-3">
                <div class="col-4">
                    <span class="badge text-bg-light">${data.dt_txt}</span>
                </div>
                <div class="col-2">
                    <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="" />
                </div>
                <div class="col-2">
                  <span>${data.weather[0].main}</span>
                </div>
                <div class="col-1">
                  <i class="bi bi-thermometer"></i>
                    <small>${(data.main.temp-273.15).toFixed(2)}</small>
                </div>
                <div class="col-1">
                <i class="bi bi-wind"></i>
                    <small>${data.wind.speed} m/s</small>
                </div>
                <div class="col-1">
                <i class="bi bi-moisture"></i>
                    <small>${data.main.humidity}</small>
                </div>
            </div>
    `
})
}
   
