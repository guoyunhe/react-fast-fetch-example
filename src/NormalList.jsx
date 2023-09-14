import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import slowFetch from "./slowFetch";

export default function NormalList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    slowFetch("https://dummyjson.com/products?limit=5")
      .then((res) => res.json())
      .then((dat) => {
        setData(dat);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <ProductList data={data} loading={loading} />
    </div>
  );
}
