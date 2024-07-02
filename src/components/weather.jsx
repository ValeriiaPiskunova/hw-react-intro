import "./weather.css";

export default function WeatherInfo({ city, text, icon }) {
  return (
    <li className="item">
      <h2 className="item__city">{city}</h2>
      <p className="item__text">
        {text} <i className={`wi ${icon}`}></i>
      </p>
    </li>
  );
}