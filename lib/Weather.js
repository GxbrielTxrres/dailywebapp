export async function loadWeather() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    `https://api.weatherbit.io/v2.0/current?points=(30.02, -97.83),(30.37, -98.06)&key=${process.env.WEATHER}`
  );
  const data = await res.json();

  return data;
}
