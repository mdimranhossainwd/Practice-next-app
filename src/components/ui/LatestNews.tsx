import { CardActionArea, CardMedia, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function LatestCard() {
  return (
    <div>
      <Card>
        <Image
          src="https://i.ibb.co.com/Sw5dts4p/Rectangle-8.png"
          width={1200}
          height={690}
          alt="Banner Logo"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            fontWeight={700}
            component="div"
          >
            Bitcoin Climbs as Elon Musk Says Tesla <br /> Likely to Accept it
            Again
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            By Awlad Hossain - Mar 18 2023
          </Typography>
          <Typography
            className="py-2"
            fontSize={17}
            sx={{ color: "text.secondary" }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout........
          </Typography>
        </CardContent>
      </Card>
      <Grid className="my-8" container spacing={2}>
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
                  src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                  Bitcoin News Today
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  By <span className="italic font-semibold">Awlad Hossain</span>{" "}
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
                  src="https://images.unsplash.com/photo-1631897641179-82f97def3992?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                  Bitcoin News Today
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  By <span className="italic font-semibold">Awlad Hossain</span>{" "}
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
    </div>
  );
}
