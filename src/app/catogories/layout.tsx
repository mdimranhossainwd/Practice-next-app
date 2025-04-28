import CategoryList from "@/components/ui/CategoryList/CategoryList";
import { Box, Container, Grid } from "@mui/material";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Container>
        <Grid container spacing={2} className="my-8">
          <Grid size={3}>
            <CategoryList />
          </Grid>
          <Grid size={9}>{children}</Grid>
        </Grid>
      </Container>
    </Box>
  );
}
