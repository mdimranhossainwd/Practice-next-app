import getAllNews from "@/utils/getAllNews";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default async function DynamicNews({ params, searchParams }) {
  const { data: allNewsData } = await getAllNews(searchParams?.category);
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={2}>
        {allNewsData?.map((news) => (
          <Grid item xs={12} sm={6} md={4} key={news._id}>
            <Link href={`/${news?.category.toLowerCase()}/${news?._id}`}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "100%",
                      height: 250,
                      objectFit: "cover",
                    }}
                    image={news?.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <span className="bg-red-500 px-4 py-1 text-white rounded-sm">
                      {news?.category}
                    </span>
                    <Typography gutterBottom variant="h5" fontWeight={700}>
                      {news?.title.slice(0, 30)}...
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      By{" "}
                      <span className="italic font-semibold">
                        {news?.author}
                      </span>{" "}
                      - {news?.date}
                    </Typography>
                    <Typography
                      className="py-2"
                      fontSize={17}
                      sx={{ color: "text.secondary" }}
                    >
                      {news?.description.slice(0, 100)}...
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
