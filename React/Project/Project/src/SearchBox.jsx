import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';



export default function SearchBox( {updateInfo}) {
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather?"

    const API_KEY = "122845a3711c7640de87fbb80aa9842b";

    // let getWeatherInfo =async(city) =>{
    //    let response =  await fetch(`${API_URL}q=${city}&appid=${API_KEY}`);
    //    let jsonResponse = await response.json();

    //     console.log(jsonResponse);
        
    // }

    let getWeatherInfo = async (city) => {

        try{
                let response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();  
        console.log(jsonResponse);
        let result = {
            city:city,
            temp : jsonResponse.main.temp,
            tempMin :jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description

        }
        console.log(result);
        return result;
        } catch(err){
            throw err;
        }
    
        
    };

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");           
            let newinfo = await getWeatherInfo(city); 
            updateInfo(newinfo); 
        }catch(err){
            setError(true);
        }
    };

    let handleChange = (evt) =>{
        setCity(evt.target.value);
    }
    
    // let handleSubmit = (evt) => {
    //     evt.preventDefault();
    //     console.log(city);
    //     setCity("");
    //     getWeatherInfo();
        
    // }
    return (
        <div className='searchBox'>
            {/* <h3>Search for the Weather </h3> */}
            <form action="">
                <TextField id="outlined-basic" label="City Name" variant="outlined" 
                required 
                onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type='submit' onClick={handleSubmit}>Submit</Button>

                {error && (
                    <p style={{ color: "red" }}>
                        <b>No such place exists in our API</b>
                    </p>
                )}
                    
            </form>
        </div>
    );
 }