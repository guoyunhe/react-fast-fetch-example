import { useFetch } from "react-fast-fetch";
import ProductList from "./ProductList";

export default function FastFetchList() {
  const { data, loading } = useFetch("https://dummyjson.com/products?limit=5");
  return (
    <div>
      <ProductList data={data} loading={loading} />
    </div>
  );
}
