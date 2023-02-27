const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7d9d042823mshdeb7f21da822f6ap1f876cjsnbcc91da10065',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityname.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {

			console.log(response)
			temp.innerHTML = response.temp
			temp0.innerHTML = response.temp
			temp1.innerHTML = response.temp
			temp2.innerHTML = response.temp
			temp3.innerHTML = response.temp
			temp4.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			feels_like1.innerHTML = response.feels_like
			feels_like2.innerHTML = response.feels_like
			feels_like3.innerHTML = response.feels_like
			feels_like4.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity0.innerHTML = response.humidity
			humidity1.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			humidity3.innerHTML = response.humidity
			humidity4.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			min_temp1.innerHTML = response.min_temp
			min_temp2.innerHTML = response.min_temp
			min_temp3.innerHTML = response.min_temp
			min_temp4.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			max_temp1.innerHTML = response.max_temp
			max_temp2.innerHTML = response.max_temp
			max_temp3.innerHTML = response.max_temp
			max_temp4.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed0.innerHTML = response.wind_speed
			wind_speed1.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_speed3.innerHTML = response.wind_speed
			wind_speed4.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			wind_degrees1.innerHTML = response.wind_degrees
			wind_degrees2.innerHTML = response.wind_degrees
			wind_degrees3.innerHTML = response.wind_degrees
			wind_degrees4.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunrise1.innerHTML = response.sunrise
			sunrise2.innerHTML = response.sunrise
			sunrise3.innerHTML = response.sunrise
			sunrise4.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			sunset1.innerHTML = response.sunset
			sunset2.innerHTML = response.sunset
			sunset3.innerHTML = response.sunset
			sunset4.innerHTML = response.sunset



		})
		.catch(err => console.error(err));

}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)

})

getWeather("Delhi");