export async function loadImage() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://api.nasa.gov/planetary/apod?count=5&api_key=ZNg4IgN8cmEf8SgmHiO1E4t0PVuhpt5DfjaLIDsu"
  );
  const data = await res.json();

  return data;
}
