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

base url
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
    url:'http://api.openweathermap.org/data/2.5/weather?q= +user input &appid=c460bebde276b6004c894570e2a429f9=53aa2cd6&t=' + userInput
}).then(function(data) {
    weatherData = data;
    //no have global accesslet movieData is the global managemetn in the stat variable
    render();
}, function(error) {
    console.log(error)  
});
}


/*----- constants -----*/
/*----- app's state (variables) -----*/
//let movieData, userInput;

/*----- cached element references -----*/
//using $ to tell people I'm using jquery 
//how to select elements in the dom using jquery
//STOPPP make sure you selected elements correctly
//jquery will always return object
//const $title = $('#title');
 //const $city = $('#city');
//const $year = $('#year');

//const $rating = $('#rated');

//const $input = $('input[type="text"]')
//grab the input that has a type = text, CSS, JS or Jquery
//to get value from input tag

/*----- event listeners -----*/
//$('form').on('submit', handleGetData)
//wrapped in $$ so we can attach and event listeener
//access an element suing jquery, then **.on= how to add event 
//listener using jquery, lisenteing for submit type of event


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

function render() {
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
