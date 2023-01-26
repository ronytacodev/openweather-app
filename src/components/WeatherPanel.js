import React, {useState} from 'react';
import Form from './Form';
import Card from './Card';

const WeatherPanel = () => {

    let urlWeather ="https://api.openweathermap.org/data/2.5/weather?APPID=5c6f751ebb0a901d3cbd87422992b634&lang=es";
    let cityUrl ="&q=";

    let urlForecast ="https://api.openweathermap.org/data/2.5/forecast?APPID=5c6f751ebb0a901d3cbd87422992b634&lang=es";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

        // Call to api weather
        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) => {
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        // Call to api forecast
        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) => {
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });
    }

    return (
        <React.Fragment>
            <Form 
                newLocation = {getLocation}
            />

            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />
        </React.Fragment>
    );
}

export default WeatherPanel;