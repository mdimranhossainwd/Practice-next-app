import LatestCard from "@/components/ui/LatestNews";
import { CardActionArea, CardMedia, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Grid container spacing={2} className="my-8">
        <Grid size={8}>
          <LatestCard />
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      width: "100%",
                      height: 250,
                      objectFit: "cover",
                    }}
                    alt="green iguana"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1707075891545-c36963b873e6?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      width={800}
                      height={600}
                      alt="Banner Logo"
                      className="rounded-lg"
                    />
                  </CardMedia>
                  <CardContent>
                    <span className="bg-red-500 px-4 py-1 text-white rounded-sm">
                      Trending
                    </span>
                    <Typography gutterBottom variant="h5" fontWeight={700}>
                      Bitcoin Climbs as Elon Musk Says...
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      By{" "}
                      <span className="italic font-semibold">
                        AWlad Hossain
                      </span>{" "}
                      - 20-4-2025
                    </Typography>
                    <Typography
                      className="py-2"
                      fontSize={17}
                      sx={{ color: "text.secondary" }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt, adipisci praesentium voluptates.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
