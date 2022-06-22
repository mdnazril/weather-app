import { useState } from 'react';
import {FaSearch} from 'react-icons/fa'

const Weather = () => {

    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const url = `http://api.weatherapi.com/v1/current.json?key=54c7d8ead8314337b0b150745222106&q=${location}&aqi=yes`;

    const searchLocation = async(e) =>{
        
     
        e.preventDefault();
        const res = await fetch(url)
        const data = await res.json();
        // if(Response.ok){
            console.log(data);
            setData(data);
            setLocation('');
        // }else{
        //     // console.log(err);
        //     alert('check spelling')
        // }
    
            
            
    }

    return (
        <div className="weather">
            <div className="topBar">
                <form onSubmit={searchLocation}>
                <input type="text" placeholder='Search Country' values={location}  onChange={(e)=>setLocation(e.target.value)}/>
                <FaSearch />
                </form>
            </div>
            <div className="cards">
            <div className="cardContainer">
                <div className="location">
                    {data.location ? <h1>{data.location.name} / {data.location.country}</h1> : null }
                    {data.location ? <p>{data.location.localtime}</p> : null }
                </div>
            <div className="temp">
            {/* {data.current ? <img src="url{data.current.condition.icon}" alt="weathernicon" /> : null } */}
            {data.current ? <h2>{data.current.temp_c}°C</h2> : null }
                <div className="tempDetails">
                {data.current ? <div>
                <h2>{data.current.wind_kph} kph</h2>
                <p>WIND</p></div> : null }
                {data.current ? <div><h2>{data.current.humidity}%</h2>
                <p>HUMIDITY</p></div> : null }
                {data.current ? <div><h2>{data.current.feelslike_c}°C </h2> 
                <p>FEEL LIKE</p>
                </div> : null }
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}
 
export default Weather;