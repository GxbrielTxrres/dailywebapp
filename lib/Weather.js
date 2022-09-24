export async function loadWeather() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://api.weatherbit.io/v2.0/current?points=(30.02, -97.83),(30.37, -98.06)&key=a0686aed97494807bc5ebfc79c7edc96&units=I"
  );
  const data = await res.json();

  return data;
}
