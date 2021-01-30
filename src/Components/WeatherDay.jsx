import React from 'react'
import {weekDays, weatherIcons} from '../Models/models';
import WeatherIcon from './WeatherIcon';
export default function WeatherDay(props) {
    const item = props.item;
    const d = new Date(item.datetime);
    //const id= item.weather.code.toString().substring(0,1);
    //const i = weatherIcons.find(x => x.id == id).value;
    return (
        <div className={item.selected? "days selected": "days"} onClick={()=> props.click() }>
            {weekDays[d.getDay()]} {d.getDate()}<br/>
            <WeatherIcon item={item} size="md" /><br/>
            {item.high_temp}° - {item.low_temp}°<br/>
        </div>
    )
}
