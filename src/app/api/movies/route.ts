export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const region = searchParams.get("region");

  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=27&region=${region}`);
  const data = await res.json();

  return Response.json(data);
}