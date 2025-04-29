import getSpecificNews from "@/utils/getSpecificNews";
import { Container, Grid, Typography } from "@mui/material";
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
          <Typography
            className="text-black"
            gutterBottom
            variant="h4"
            fontWeight={700}
          >
            {news?.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            By <span className="italic font-semibold">{news?.author}</span> -{" "}
            {news?.date}
          </Typography>
          <Typography
            className="py-2"
            fontSize={17}
            sx={{ color: "text.secondary" }}
          >
            {news?.description} Dramatically foster high standards in
            methodologies vis-a-vis exceptional convergence. Collaboratively
            revolutionize multidisciplinary resources for resource sucking
            interfaces. Quickly transform an expanded array of methodologies for
            B2B e-business. Completely productivate standards compliant
            resources before accurate collaboration and idea-sharing.
            Compellingly maximize business alignments rather than granular
            systems. Credibly actualize state of the art total linkage after
            frictionless customer service. Phosfluorescently seize intermandated
            markets via team driven leadership. Seamlessly plagiarize vertical
            methods of empowerment without virtual core competencies. Quickly
            utilize cross-platform human capital.
          </Typography>
          <Typography
            className="py-2"
            fontSize={16}
            fontWeight={600}
            color="text.secondary"
            fontFamily={"italic"}
          >
            " Conveniently incubate enabled benefits for excellent
            architectures. Completely promote functionalized leadership skills
            before functionalized channels. Phosfluorescently scale alternative
            "outside the box" thinking."
          </Typography>
          <Typography
            className="py-2"
            fontSize={20}
            fontWeight={600}
            color="text.secondary"
            fontFamily={"italic"}
          >
            --- Jhon Doe, CEO of ABC Company
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
