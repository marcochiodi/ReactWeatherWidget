import React, { useEffect, useState } from "react";
import WeatherDay from "./WeatherDay";
import WeatherIcon from "./WeatherIcon";

export default function WeatherWidget(props) {
  useEffect(() => {
    if (props && props.items) {
      selectDay(props.items.data, 0);

      //setItems(props.items.data)
    }
  }, [props]);
  const [items, setItems] = useState([]);
  const [itemSelected, setItemSelected] = useState();

  function selectDay(elements, index) {
    if (elements) {
      let d = JSON.parse(JSON.stringify(elements));
      d.forEach(function (e, i) {
        if (i == index) {
          e.selected = true;
          setItemSelected(e);
        } else {
          e.selected = false;
        }
      });
      setItems(d);
    }
  }

  function setDayByChild(index) {
    selectDay(items, index);
  }

  return (
    <div>
      <div
        className="weather-widget"
        style={{ backgroundImage: "url(./content/Bitmap.png)" }}
      >
        {items.length ? (
          <div>
            <div>
              <h1 className="title">
                <img src="./content/icons/placeholder.svg" />
                &nbsp;{props.items.city_name}
              </h1>
              <WeatherIcon item={itemSelected} size="lg" />
              <h1 className="temp-title">
                {itemSelected && itemSelected.temp}&nbsp;°
              </h1>
              <h1 className="detail-title">
                Percepita:&nbsp;{itemSelected && itemSelected.app_max_temp}% /{" "}
                {itemSelected && itemSelected.app_min_temp}%
              </h1>
              <h1 className="detail-title">
                Umidità:&nbsp;{itemSelected && itemSelected.rh}%
              </h1>
            </div>
            <hr style={{ opacity: "0.2" }} />
            <div className="days-container">
              {items.map((e, i) => {
                return (
                  <WeatherDay item={e} click={() => setDayByChild(i)} key={i} />
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <h1 className="title">Selezionare una città</h1>
          </div>
        )}
      </div>
    </div>
  );
}
