



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aa918c7460msh17c5c5bc5376d0ap116f1cjsn76ae79bd6775',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
}


const getWeather = (city)=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		
		cityName.innerHTML=city;
		console.log(response)

		cloud_pct.innerHTML=response.cloud_pct
		temp.innerHTML=response.temp

		humidity.innerHTML=response.humidity
		min_temp.innerHTML=response.min_temp
		max_temp.innerHTML=response.max_temp
		wind_speed.innerHTML=response.wind_speed
		wind_degrees.innerHTML=response.wind_degrees
		sunrise.innerHTML=response.sunrise
		sunset.innerHTML=response.sunset
	  
	
	
	})
	
	.catch(err => console.error(err));


}


getWeather("Mumbai")

function func1(){
	
	
	var city123=document.getElementById("city123").value;

	getWeather(city123);

	
}





