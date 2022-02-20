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

        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=5349b1599db6dd3cb3add5621bc5f939`;
            
            

            fetchApi(api);
            

        });
    } 
        
});

function fetchApi(api){

    fetch(api)
            .then(res => { return res.json();})
            .then(data => {
            
                const{description,id} = data.weather[0]
                const{temp= data.main.temp, name=data.name} = data;

                if(id == 800){
                    wIcons.src =`https://openweathermap.org/img/wn/01d@2x.png`;
                } 
        
                else if(id>=200 && id<=232){
                    wIcons.src =`https://openweathermap.org/img/wn/11d@2x.png`;
                }

                else if(id>=300 && id<=321){
                    wIcons.src =`https://openweathermap.org/img/wn/09d@2x.png`;
                }

                else if(id>=500 && id<=531){
                    wIcons.src =`https://openweathermap.org/img/wn/10d@2x.png`;
                }

                else if(id>=600 && id<=622){
                    wIcons.src =`https://openweathermap.org/img/wn/13d@2x.png`;
                }

                else if(id>=700 && id<=781){
                    wIcons.src =`https://openweathermap.org/img/wn/50d@2x.png`;
                }
                
                else if(id>=800 && id<=804){
                    wIcons.src =`https://openweathermap.org/img/wn/03d@2x.png`;
                }

                temperatureDegree.textContent = temp;
                temperatureDescription.textContent=`Its ${description} today`;
                locationTimezone.textContent=`${name}, ${data.sys.country}`;
                console.log(data);

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
            });
        
}