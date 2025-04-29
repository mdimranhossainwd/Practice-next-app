export default async function getSpecificNews(newsId) {
  const response = await fetch(
    `https://next-news-portal-pi.vercel.app/api/v1/news/${newsId}`,
    {
      cache: "no-store",
    }
  );
  return response.json();
}
