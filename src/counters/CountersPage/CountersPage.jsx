import { Typography } from "@mui/material";
import { Counter } from "@/ds/organisms";
export default function CountersPage() {
  return (
    <>
      <Typography variant="h1">CountersPage</Typography>
      <Counter data-testid="counter-1" />
      <Counter initialValue={5} data-testid="counter-2" />
      <Counter initialValue={-10} step={10} data-testid="counter-3" />
    </>
  );
}
