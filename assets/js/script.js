window.addEventListener('load', ()=>{
    let long;
    let lat;
    let locationTimezone = document.querySelector(".location__timezone");
    let temperatureDescription = document.querySelector(".temperature__description");
    let temperatureDegree = document.querySelector(".temperature__degree");

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5349b1599db6dd3cb3add5621bc5f939`;
            fetch(api)
            .then(res => {
                return res.json();
            })
            .then(data => {
                
                const{temp= data.main.temp, weather= data.weather[0].main} = data;
                temperatureDegree.textContent = temp;
                console.log(data.weather[0].main);
            });
        });

        
    } 
        else{
        alert("Please allow your location.");
    }
});