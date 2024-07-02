import data from './data/data.json';
import './assets/normalize.css';
import './assets/weather-icons-master/css/weather-icons.min.css';
import './App.css'
import WeatherInfo from './components/weather';

function App() {

  return (
    <>
     <main>
        <h1>
          CSS Weather Forecast
          <i className="wi wi-city wi-sunrise"></i>
        </h1>

        <ul>
          {data.items.map((item, index) => (
            <WeatherInfo
              key={index}
              city={item.city}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </ul>

          <p className='text-above'>
            Have a nice day and don't forget umbrella if you are in New Delhi
            now!
          </p>
      </main>
    </>
  )
}

export default App
