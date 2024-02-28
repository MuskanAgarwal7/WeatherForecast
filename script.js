const input = document.querySelector("#input")
const para = document.querySelector(".temperature");
const btn = document.querySelector("button");
const cityName = document.querySelector(".city");
const region = document.querySelector(".region");
const country = document.querySelector(".country");
const text = document.querySelector(".text");

(async () => {
    let URL = 'https://api.weatherapi.com/v1/current.json?key=&q=New%20delhi&aqi=no'
    let response = await fetch(URL);
    let data = await response.json();
    para.innerText = data.current.temp_c;
    text.innerText = data.current.condition.text;
})();


async function weatherApi(city) {
    let URL = `https://api.weatherapi.com/v1/current.json?key=&q=${city}&aqi=no`;
    let response = await fetch(URL);
    let data = await response.json();
    para.innerText = data.current.temp_c;
    cityName.innerText = data.location.name;
    region.innerText = data.location.region;
    country.innerText = data.location.country;
    text.innerText = data.current.condition.text;
}


button.addEventListener("click", () => {
    weatherApi(input.value);
});
