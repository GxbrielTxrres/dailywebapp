export async function loadImage() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?count=3&api_key=${process.env.NASA}`
  );
  const data = await res.json();

  return data;
}
