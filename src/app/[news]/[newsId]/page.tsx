import getSpecificNews from "@/utils/getSpecificNews";
import { Container, Grid } from "@mui/material";
import Image from "next/image";

export default async function NewsDetailsPage({ params }) {
  const { data: news } = await getSpecificNews(params?.newsId);
  return (
    <Container className="my-8">
      <Grid container spacing={2}>
        <Grid size={6}>
          <Image
            src={news?.image}
            width={1000}
            height={600}
            alt="Banner Logo"
          />
          <Grid container spacing={2} className="my-3">
            <Grid size={6}>
              <Image
                src={news?.image}
                width={1000}
                height={600}
                alt="Banner Logo"
              />
            </Grid>
            <Grid size={6}>
              <Image
                src={news?.image}
                width={1000}
                height={600}
                alt="Banner Logo"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={6}>
          <p>Details</p>
        </Grid>
      </Grid>
    </Container>
  );
}
