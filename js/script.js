/*const promise = $.ajax({
    url:'http://api.openweathermap.org/data/2.5/weather?q=riverside&appid=c460bebde276b6004c894570e2a429f9'
})

promise.then(
    (data) => {
        console.log(data);
},
(error) => {
    console.log('bad request: ', error);
}
);
*/
/*----- constants -----*/
const units = '&units=imperial'
const apiKey = 'c460bebde276b6004c894570e2a429f9';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
/*----- app's state (variables) -----*/
let weatherData, userInput
/*----- cached element references -----*/
const $country = $('#country');
const $error =('#error');
const $city = $('#city');
const $feelsLike = $('#feelsLike');
const $description = $('#description');
const $temperature = $('#temperature');
const $humidity = $('#humidity');
//const $sunrise = $('#sunrise');
//const $sunset = $('#sunset');
const $windSpeed = $('#windSpeed');
const $input = $('input[type="text"]')
/*----- event listeners -----*/
$('form').on('submit', handleGetData)

/*----- functions -----*/


function handleGetData(e) {
    e.preventDefault();//prevents the default behavior of form submission
    if($input.val() === "") return; //No data don't run checking to make sure u enter text

    userInput = $input.val();

   $.ajax({
    url: baseUrl + userInput + '&APPID=' + apiKey + units
    //  url: baseUrl + userInput + text + apiKey
        
}).then(function(data) {
    render(data); //render the response 
    weatherData = data;
    // is this necessary??
}, function(error) {
    console.log(error) 
    $error.text(JSON.parse(error.responseText).message)
});
}
//ask about getting error to read in location? 
//ask about functions to change data into degrees fareignhieth and also time funciton

//"coord":{"lon":-116.05,"lat":33.73},
//   "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],
//   "base": "stations",
//   "main":{"temp":309.78,"feels_like":304.18,"temp_min":304.82,"temp_max":313.15,"pressure":1006,"humidity":8},
//   "visibility":16093,
//   "wind":{"speed":4.6,"deg":130},
//   "clouds":{"all":1},
//   "dt":1588980772,
//   "sys":{"type":1,"id":6065,"country":"US","sunrise":1588942102,"sunset":1588991578},
//   "timezone":-25200,"id":5387890,"name":"Riverside","cod":200
// }
function render(weatherData) {
    $city.text($input.val().toString()); //do I need .toString it works without it so  I'd like to take it out...
    $country.text(weatherData.sys.country);
    $description.text(weatherData.weather[0].description);
    $humidity.text(weatherData.main.humidity);
    $temperature.text(weatherData.main.temp);
//.add("°F") //°F
   //join("degress C"); how to I join measuremnt (0°C × 9/5) + 32 = 32°F
    $feelsLike.text(weatherData.main.feels_like); // °F
    $windSpeed.text(weatherData.wind.speed); //add mph
    //$sunrise.text(weatherData.sys.sunrise); //conver to an actual time      
    //$sunset.text(weatherData.sys.sunset);
    $input.val(); //clear the input
}
