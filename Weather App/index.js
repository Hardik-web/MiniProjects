let weather={
    "apiKey":"890b8ac7a189146314df515242e35cb4",
    fetchWeather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + 
            "&units=metric&appid="
            + this.apiKey)
        .then((response)=>response.json())
        // .then((data)=>console.log(data));
        .then((data)=>this.displayWeather(data));
    },
    displayWeather:function(data){
    const { name }=data || {};
    const {icon,description}=data.weather[0];
    const {temp,humidity}=data.main;
    const {speed}=data.wind;
    document.querySelector('.city').innerText="Weather in " + name;
    document.querySelector(".temperature").innerText=temp + "°C";
    document.querySelector(".icon").src= "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".Description").innerText=description;
    document.querySelector(".Humidity").innerText="Humidity" + humidity + "%";
    document.querySelector(".WindSpeed").innerText="Wind Speed" + speed + "km/hr";
    document.querySelector(".weather").classList.remove("loading")
    },
    search:function(){
        this.fetchWeather(document.querySelector('.search-bar').value)
    }
 };

document.querySelector('.search button')
.addEventListener('click',function(){
weather.search();
})
document.querySelector('.search-bar')
.addEventListener('keyup',function(e){
if (e.key=="Enter"){
    weather.search();
}
});
