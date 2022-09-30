const Weather = (props) => {
  let date = new Date().toString().slice(0, 15);

  return (
    <>
      <div>
        <h1>{date}</h1>
        <p>
          {props.city}, {props.state}
        </p>
        <p>{props.temp}°F</p>
        <p>Currently: {props.desc}</p>
      </div>
    </>
  );
};

export default Weather;
