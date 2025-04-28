export const getAllCategory = async () => {
  const response = await fetch(
    "https://next-news-portal-pi.vercel.app/api/v1/category"
  );

  return response.json();
};
