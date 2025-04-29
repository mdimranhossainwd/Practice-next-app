import getAllNews from "@/utils/getAllNews";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default async function DynamicNews({ params, searchParams }) {
  const { data: allNewsData } = await getAllNews(searchParams?.category);
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={2}>
        {allNewsData?.map((news) => (
          <Grid item xs={12} sm={6} md={4} key={news._id}>
            <Card sx={{ maxWidth: 345, mx: "auto" }} className="my-4">
              <Image
                src={news?.image}
                width={1000}
                height={600}
                alt="Banner Logo"
              />
              <CardContent>
                <span className="bg-red-500 w-[250px] px-4 py-1 mb-3 text-white rounded-sm">
                  {news?.category}
                </span>
                <Typography gutterBottom variant="h5" fontWeight={700}>
                  {news?.title.slice(0, 30)}...
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  By {news?.author} - {news?.date}
                </Typography>
                <Typography
                  className="py-2"
                  fontSize={17}
                  sx={{ color: "text.secondary" }}
                >
                  {news?.description.slice(0, 100)}...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
