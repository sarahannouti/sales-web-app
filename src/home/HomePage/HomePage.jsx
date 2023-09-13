import {
  FormControl,
  FormControlLabel,
  FormLabel,
  LinearProgress,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useProducts, useProductSearch } from "../../hooks";
import { productColumns } from "../../products/productColumns";

export default function HomePage() {
  const { condition, search, setCondition, setSearch } = useProductSearch();
  const {
    isLoading,
    error,
    data: products,
  } = useProducts({ condition, search });

  if (error) return "oulala";

  return (
    <>
      <Stack direction="row" justifyContent="center" spacing={6} sx={{ my: 4 }}>
        <TextField
          label="Recherche"
          sx={{ width: 400 }}
          autoComplete="off"
          value={search}
          onChange={setSearch}
        />
        <FormControl>
          <FormLabel id="condition-label">Condition</FormLabel>
          <RadioGroup
            row
            aria-labelledby="condition-label"
            name="condition"
            value={condition}
            onChange={setCondition}
          >
            <FormControlLabel value="" control={<Radio />} label="Toutes" />
            <FormControlLabel value="new" control={<Radio />} label="Neuf" />
            <FormControlLabel
              value="used"
              control={<Radio />}
              label="Occasion"
            />
          </RadioGroup>
        </FormControl>
      </Stack>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <DataGrid
          rows={products}
          columns={productColumns}
          disableRowSelectionOnClick
          autoHeight
        />
      )}
    </>
  );
}
