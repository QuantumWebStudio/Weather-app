cn = document.getElementById("cityName");
sc = document.getElementById("searchCity");
ci = document.getElementById("cityInfo");
ct = document.getElementById("cityTime");
ctem = document.getElementById("cityTemp");
img = document.getElementById("imgageResult");

async function getData(CityName) {
  const promise = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=d403f92fca4e4377995134234241704&q=${CityName}&aqi=yes`
  );
  return await promise.json();
}

sc = addEventListener("click", async () => {
  city = cn.value;
  const result = await getData(city);
  console.log(result);
  ci.innerText = `${result.location.name},${result.location.region},${result.location.country}`;
  ct.innerText = ` Date and Time:${result.location.localtime} `;
  ctem.innerText = `Temperature:${result.current.temp_c}°Celsius`;
  if (result.current.temp_c >= 30) {
    console.log("temp above 30");
    img.style.visibility="visible"
    img.src = "sunny.jpg";
  } else if (result.current.temp_c >= 15) {
    console.log("temp above 15");
    img.style.visibility="visible"
    img.src = "cloudy.jpg";
  } else {
    console.log("temp below 15");
    img.style.visibility="visible"
    img.src = "snowing.jpg";
  }
});
