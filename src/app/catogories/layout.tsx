import { Grid } from "@mui/material";

export default function CategoryLayout() {
  return (
    <Grid container spacing={2} className="my-8">
      <Grid size={3}>
        <h2>Category</h2>
      </Grid>
      <Grid size={9}>Category News</Grid>
    </Grid>
  );
}
