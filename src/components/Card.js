import React from 'react';
import Spinner from './Spinner';

const Card = ({loadingData, showData, weather, forecast}) => {

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + "/" + month + "/" + year;

    var url = "";
    var iconUrl = "";

    if(loadingData) {
        return <Spinner/>;
    }

    if(showData) {
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
    }

    return (
        <div className="mt-5">
           {
            showData === true ? (
                <div className="container">
                    <div className="card mb-3 mx-auto bg-dark text-light">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <h3 className="card-title">{weather.name}</h3>
                                <p className="card-date">{date}</p>
                                <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                                <p className="card-desc"><img src={iconUrl} alt="icon"/>
                                    {weather.weather[0].description}
                                </p>
                                <img 
                                    src="https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    className="img-fluid rounded-start"
                                    alt="city"
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body text-start mt-2">
                                    <h5 className="card-text">
                                        Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)} °C
                                    </h5>
                                    <h5 className="card-text">
                                        Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)} °C
                                    </h5>
                                    <h5 className="card-text">
                                        Sensación Térmica: {(weather.main.feels_like - 273.15).toFixed(1)} °C
                                    </h5>
                                    <h5 className="card-text">
                                        Humedad: {weather.main.humidity} %
                                    </h5>
                                    <h5 className="card-text">
                                        Velocidad del viento: {weather.wind.speed} m/s
                                        {/* me quede en el min 1:21:20 */}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                <h2 className="text-light">Sin datos</h2>
            )
           }

        </div>
    );
}

export default Card;