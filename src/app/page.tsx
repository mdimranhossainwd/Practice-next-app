import LatestCard from "@/components/ui/LatestNews";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <>
      <Grid container spacing={2} className="my-8">
        <Grid size={8}>
          <LatestCard />
        </Grid>
        <Grid size={4}>Trending News</Grid>
      </Grid>
    </>
  );
}
