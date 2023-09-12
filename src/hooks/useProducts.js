import { useQuery } from "@tanstack/react-query";

const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

export default function useProducts({ condition }) {
  console.log(condition);
  return useQuery(["products", { condition }], () =>
    fetch(`${baseUrl}/products?condition=${condition}`).then((response) =>
      response.json(),
    ),
  );
}
