export default async function getAllNews(category) {
  const response = await fetch(
    `https://next-news-portal-pi.vercel.app/api/v1/news?category=${category}`,
    {
      cache: "no-store",
    }
  );
  return response.json();
}
