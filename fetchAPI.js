
let promise = fetch('https://goweather.herokuapp.com/weather/Curitiba');

promise.then((response)=>{
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    return response.json(); // Parse data into json and return it
}).then((data)=>{
    console.log(data);
})