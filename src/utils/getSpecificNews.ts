export default async function getSpecificNews(id) {
  const response = await fetch(
    `https://nextjs-news-api.vercel.app/api/news/${id}`
  );
  return response.json();
}
