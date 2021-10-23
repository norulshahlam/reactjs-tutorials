const WeatherIcon = (data) => {
  console.log(data.weatherProps.img);

  return (
    <div style={userStyle}>
      <img src={data.weatherProps.img} alt="" />
      <div>{data.weatherProps.condition}</div>
      <div>{data.weatherProps.time}</div>
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default WeatherIcon;
