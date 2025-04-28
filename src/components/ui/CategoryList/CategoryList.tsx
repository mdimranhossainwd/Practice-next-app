import { getAllCategory } from "@/utils/getAllCategory";

export default async function CategoryList() {
  const data = await getAllCategory();
  console.log(data);
  return <h2>Category List</h2>;
}
