import { Typography } from "@mui/material";
import { Counter } from "../../ds/atoms/organisms";
export default function CountersPage() {
  return (
    <>
      <Typography variant="h1">CountersPage</Typography>
      <Counter />
      <Counter initialValue={5} />
      <Counter initialValue={-10} step={10} />
    </>
  );
}
