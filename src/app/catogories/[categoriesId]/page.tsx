export default function DynamicNews({ params, searchParams }) {
  return <h2 className="text-black">Hello World {searchParams?.category}</h2>;
}
