export async function loadQuotes() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://zenquotes.io/api/quotes/keyword=life?");
  const data = await res.json();

  return data;
}
