import React from 'react';
import {weatherIcons} from '../Models/models';

export default function WeatherIcon(props) {
    const id= props.item.weather.code.toString().substring(0,1);
    const i = weatherIcons.find(x => x.id == id).value;
    return (
        <img src={"/content/icons/" + i + ".svg" }  alt={props.item.weather.description} className={"icon-" +  props.size} />
    )
}
