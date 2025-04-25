import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function LatestCard() {
  return (
    <Card>
      <Image
        src="https://i.ibb.co.com/Sw5dts4p/Rectangle-8.png"
        width={1200}
        height={690}
        alt="Banner Logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" fontWeight={700} component="div">
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
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout........
        </Typography>
      </CardContent>
    </Card>
  );
}
