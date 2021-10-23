import { weatherProps } from "./WeatherData";
import WeatherIcon from "./WeatherIcon";

const App = () => {
  return (
    <div>
      <h1>hi from app {}</h1>
      {weatherProps.map((data, index) => (
        <WeatherIcon key={index} weatherProps={data} />
      ))}
    </div>
  );
};

export default App;
