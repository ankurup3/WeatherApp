import './App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
function App() {
  const [weather, setWeather]= useState( null );
  useEffect( 
    ()=> {
      axios.get("http://api.weatherstack.com/current?access_key=37241d7a84aeaf78f1c33591ddc07f80&query=Silchar").then((response)=> {
        setWeather(response.data);
      })
      .catch((err) => console.log(err));
    }, []
  );
  console.log(weather);
  return (
    <div className="App">
      { weather && <div> 
        
         
        <div className="card">
        <div className="bg-image"></div> 
    
        <div className="location">
          <h1 className="city">{weather.location.country}/{weather.location.name}</h1>
          <img src={weather.current.weather_icons} className="weather-icon" alt=""></img>
        </div>

        <div className="temperature">
          
          <div class="degree-section">
            <h2 className="temperature-degree">{weather.current.temperature}</h2>
            <span>°C</span>
          </div>

          <div className="temperature-description">{weather.current.weather_descriptions}</div>
        </div>
        
      </div>
       </div> }
    </div>
  );
}

export default App;
