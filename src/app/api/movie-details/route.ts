export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response("Missing movie ID", { status: 400 });
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
  );

  if (!res.ok) {
    return new Response("Failed to fetch movie details", { status: 500 });
  }

  const data = await res.json();
  return Response.json(data);
}