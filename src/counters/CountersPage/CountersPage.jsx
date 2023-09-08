import { Typography } from "@mui/material";
import { Counter } from "../Counter";
export default function CountersPage() {
  return (
    <>
      <Typography variant="h1">CountersPage</Typography>
      <Counter />
      <Counter initialValue={42} />
      <Counter initialValue={10} step={2} />
      <Counter initialValue={-10} step={2} />
    </>
  );
}
