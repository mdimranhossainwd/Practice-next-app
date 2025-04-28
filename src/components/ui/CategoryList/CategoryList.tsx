import { getAllCategory } from "@/utils/getAllCategory";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
export default async function CategoryList() {
  const { data: allCategory } = await getAllCategory();
  // console.log(data);
  return (
    <Box className="text-black">
      <Typography variant="h5" marginBottom={2} fontWeight={700} gutterBottom>
        Categories
      </Typography>

      {allCategory?.map((category) => (
        <Box
          key={category._id}
          sx={{
            padding: 1,
            margin: 1,
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: 2,
          }}
        >
          <Link href={`/catogories/news?category=${category.name}`}>
            <Stack spacing={2}>{category?.name}</Stack>
          </Link>
        </Box>
      ))}
    </Box>
  );
}
