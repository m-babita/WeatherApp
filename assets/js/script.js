let long, lat, api,
    locationTimezone = document.querySelector(".location__timezone"),
    temperatureDescription = document.querySelector(".temperature__description"),
    temperatureDegree = document.querySelector(".temperature__degree"),
    degreeSection = document.querySelector(".degree__section")
    degreeSpan = document.querySelector(".degree__section span"),
    wIcons = document.querySelector(".icons");
    const proxy = 'https://cors-anywhere.herokuapp.com/';

window.addEventListener('load', ()=>{
    
    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(  position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=5349b1599db6dd3cb3add5621bc5f939`;
            
            

            fetchApi(api);
            

        });
    } 
        
});

async function fetchApi(api){

    

    const response = await fetch(api);
    const data = await response.json();
            
                const{description,id} = data.weather[0]
                const{temp= data.main.temp, name=data.name} = data;

                temperatureDegree.textContent = temp;
                temperatureDescription.textContent=`Its ${description} today`;
                locationTimezone.textContent=`${name}, ${data.sys.country}`;
                wIcons.src =`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

                //change temperature F/C
            let fahren = (temp * 9 / 5) +32;
            degreeSection.addEventListener('click', () =>{

                if(degreeSpan.textContent=== "°C"){
                    degreeSpan.textContent = "F";
                    temperatureDegree.textContent = Math.floor(fahren);
                }
                else{
                    degreeSpan.textContent = "°C";
                    temperatureDegree.textContent = temp;
                }

            });
        
}