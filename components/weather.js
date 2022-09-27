import "bootstrap/dist/css/bootstrap.min.css";

const Weather = (props) => {
  let date = new Date().toString().slice(0, 15);

  return (
    <>
      <div className="text-center">
        <h2>{date}</h2>
        <h1>
          {props.city}, {props.state}
        </h1>
        <p>{props.temp}°F</p>
        <p>Currently: {props.desc}</p>
      </div>
    </>
  );
};

export default Weather;
