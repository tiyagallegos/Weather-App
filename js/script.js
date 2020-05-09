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

const $city = $('city');
const $time = $('time');
const $weather = $('weather');
const $description = $('description');
const $temperature = $('temperature');
const $humidity = $('humidity');
const $sunrise = $('sunrise');
const $sunset = $('sunset');
const $input = $('input[type="text"]')
/*----- event listeners -----*/
$('form').on('submit', handleGetData)

/*----- functions -----*/


function handleGetData(e) {
    e.preventDefault();//prevents the default behavior of form submission
    if($input.val() === "") return; //No data don't run checking to make sure u enter text

    userInput = $input.val();
   $input.val(""); //clear the input
   $.ajax({
    url: baseUrl + userInput
}).then(function(data) {
    render(data); //render the response 
    //no have global accesslet movieData is the global managemetn in the stat variable
}, function(error) {
    console.log(error)  
});
}




/*----- functions -----*/

function handleGetData(event) {
    event.preventDefault();//prevents the default behavior of form submission
    if($input.val() === "") return; //No data don't run checking to make sure u enter text

    userInput = $input.val();
   $input.val(""); //clear the input
    //assignning userinput to input value connecting with the dom
    //will give the value user gives in input tag
    $.ajax({
        url:'http://api.openweathermap.org/data/2.5/weather?q= +user input &appid=c460bebde276b6004c894570e2a429f9=53aa2cd6&t=' + userInput
    }).then(function(data) {
        weatherData = data;
        //no have global accesslet movieData is the global managemetn in the stat variable
        render();
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
    $time.html(weatherData.timezone);
    $weather.html(weatherData.weather) 
    $description.html(weatherData.main);
    $temperature.html(weatherData.main+temp);
    $humidity.html(weatherData.humidity);
    $windSpeed.html(weatherData.wind);
    $sunrise.html(weatherData.sys.sunrise);
    $sunset.html(weatherData.sys[3]);
}
//let movieData is the global managemetn in the stat variable

//re-factoring=making it fit a certain spec
//this code will only execute when this function gets called
//usually have to change some variable names after refactioring. 


//making dynamic ajax requests
//whenever browser sees a form,the form will tell browser to refresh the page
//defeats purpose of AJAX don't need to refresh the page so turn off default 
//behavior of the form
