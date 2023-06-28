const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '00cca78c4cmsh529ff41e76f2ad2p1ac050jsn31bf988ba608',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then((response)=> {
        console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset


        })
	.catch(err => console.error(err));
    }
    
        
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("delhi");



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata' , options)
	.then(response => response.json())
	.then((response)=> {
        console.log(response)
            kol_cloud_pct.innerHTML = response.cloud_pct
            kol_temp.innerHTML = response.temp
            kol_feels_like.innerHTML = response.feels_like
            kol_humidity.innerHTML = response.humidity
            kol_min_temp.innerHTML = response.min_temp
            kol_max_temp.innerHTML = response.max_temp
            kol_wind_speed.innerHTML = response.wind_speed
            kol_wind_degrees.innerHTML = response.wind_degrees
            kol_sunrise.innerHTML = response.sunrise
            kol_sunset.innerHTML = response.sunset


        })
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bangalore' , options)
	.then(response => response.json())
	.then((response)=> {
        console.log(response)
            ban_cloud_pct.innerHTML = response.cloud_pct
            ban_temp.innerHTML = response.temp
            ban_feels_like.innerHTML = response.feels_like
            ban_humidity.innerHTML = response.humidity
            ban_min_temp.innerHTML = response.min_temp
            ban_max_temp.innerHTML = response.max_temp
            ban_wind_speed.innerHTML = response.wind_speed
            ban_wind_degrees.innerHTML = response.wind_degrees
            ban_sunrise.innerHTML = response.sunrise
            ban_sunset.innerHTML = response.sunset


        })
	.catch(err => console.error(err));


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=hyderabad' , options)
	.then(response => response.json())
	.then((response)=> {
        console.log(response)
            hyd_cloud_pct.innerHTML = response.cloud_pct
            hyd_temp.innerHTML = response.temp
            hyd_feels_like.innerHTML = response.feels_like
            hyd_humidity.innerHTML = response.humidity
            hyd_min_temp.innerHTML = response.min_temp
            hyd_max_temp.innerHTML = response.max_temp
            hyd_wind_speed.innerHTML = response.wind_speed
            hyd_wind_degrees.innerHTML = response.wind_degrees
            hyd_sunrise.innerHTML = response.sunrise
            hyd_sunset.innerHTML = response.sunset


        })
	.catch(err => console.error(err));


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=jaipur' , options)
	.then(response => response.json())
	.then((response)=> {
        console.log(response)
            jai_cloud_pct.innerHTML = response.cloud_pct
            jai_temp.innerHTML = response.temp
            jai_feels_like.innerHTML = response.feels_like
            jai_humidity.innerHTML = response.humidity
            jai_min_temp.innerHTML = response.min_temp
            jai_max_temp.innerHTML = response.max_temp
            jai_wind_speed.innerHTML = response.wind_speed
            jai_wind_degrees.innerHTML = response.wind_degrees
            jai_sunrise.innerHTML = response.sunrise
            jai_sunset.innerHTML = response.sunset

        })
	.catch(err => console.error(err));







