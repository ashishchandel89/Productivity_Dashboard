//========================Weather API========================
    async function getWeather(city){
        try{
        let apikey="8e33ac3ebd28fcab831d004efbc5fd33";
      let raw_data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
        if(!raw_data.ok){
            console.log(real_data);   
            throw new Error("Your city name is not valid. Please check city name!");
        }
        let real_data=await raw_data.json();
        console.log("Temprature: ",real_data.main.temp+"°");
        console.log("Wind Speed: ",real_data.wind.speed);
        console.log("Temprature: ",real_data.sys.country);
        }catch(err){
            console.log(err.message);
        }
    }
    getWeather("Sirsa");