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

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=c460bebde276b6004c894570e2a429f9&q=';
/*----- app's state (variables) -----*/
//let weatherData, userInput
/*----- cached element references -----*/

const $city = $('#city');
const $time = $('time');
const $weather = $('#weather');
const $description = $('#description');
const $temperature = $('#temperature');
const $humidity = $('#humidity');
const $sunrise = $('#sunrise');
const $sunset = $('#sunset');
const $input = $('input[type="text"]')
/*----- event listeners -----*/
$('form').on('submit', handleGetData)

/*----- functions -----*/


function handleGetData(e) {
    e.preventDefault();//prevents the default behavior of form submission
    if($input.val() === "") return; //No data don't run checking to make sure u enter text

    userInput = $input.val();

   $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?appid=c460bebde276b6004c894570e2a429f9&q=' + userInput
}).then(function(data) {
    render(data); //render the response 
    
}, function(error) {
    console.log(error)  
});
}


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
    $city.text($input.val().toString());


    $input.val(""); //clear the input
    $time.text(weatherData.weather.timezone);
    $weather.text(weatherData.weather[0].weather) 
    $description.text(weatherData.weather.main);
    $temperature.text(weatherData.weather.$temperature);
    $humidity.text(weatherData.weather.humidity);
    $windSpeed.text(weatherData.weather.speed);
    $sunrise.text(weatherData.weather.sys.sunrise);
    $sunset.text(weatherData.weather.sys.sunset);
}
//let movieData is the global managemetn in the stat variable

//re-factoring=making it fit a certain spec
//this code will only execute when this function gets called
//usually have to change some variable names after refactioring. 


//making dynamic ajax requests
//whenever browser sees a form,the form will tell browser to refresh the page
//defeats purpose of AJAX don't need to refresh the page so turn off default 
//behavior of the form
