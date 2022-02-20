window.addEventListener('load', ()=>{
    let long, lat,
    locationTimezone = document.querySelector(".location__timezone"),
    temperatureDescription = document.querySelector(".temperature__description"),
    temperatureDegree = document.querySelector(".temperature__degree"),
    wIcons = document.querySelector(".icons");
    
    
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
                
                
                const{description,id} = data.weather[0]
                const{temp= data.main.temp, name=data.name} = data;

                if(id == 800){
                    wIcons.src =`http://openweathermap.org/img/wn/01d@2x.png`;
                } 
        
                else if(id>=200 && id<=232){
                    wIcons.src =`http://openweathermap.org/img/wn/11d@2x.png`;
                }

                else if(id>=300 && id<=321){
                    wIcons.src =`http://openweathermap.org/img/wn/09d@2x.png`;
                }

                else if(id>=500 && id<=531){
                    wIcons.src =`http://openweathermap.org/img/wn/10d@2x.png`;
                }

                else if(id>=600 && id<=622){
                    wIcons.src =`http://openweathermap.org/img/wn/13d@2x.png`;
                }

                else if(id>=700 && id<=781){
                    wIcons.src =`http://openweathermap.org/img/wn/50d@2x.png`;
                }
                
                else if(id>=800 && id<=804){
                    wIcons.src =`http://openweathermap.org/img/wn/03d@2x.png`;
                }

                temperatureDegree.textContent = temp;
                temperatureDescription.textContent=`Its ${description} today`;
                locationTimezone.textContent=`${name}, ${data.sys.country}`;
                console.log(locationTimezone);
            });
        });

        
    } 

    function setIcons(icons, iconID){
        const skycons = skycons({color:"white"})
    }
        
});