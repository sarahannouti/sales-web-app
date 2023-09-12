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

import { ProductCondition } from "../ProductCondition";
import { ProductDescription } from "../ProductDescription";
import { ProductImage } from "../ProductImage";
import { ProductPrice } from "../ProductPrice";
import { withRow } from "../../hoc";
import { useProducts } from "../../hooks";
import useCondition from "../../hooks/useCondition";

export default function HomePage() {
  const [condition, setCondition] = useCondition();
  const { isLoading, error, data: products } = useProducts({ condition });

  // TODO Utilisons un composant MUI
  if (isLoading) return <LinearProgress />;

  // TODO Est-ce qu'on pourrait pas utiliser un message d'erreur
  // pour l'utilisateur à la hauteur de l'app entière ?
  if (error) return "oulala";

  const productColumns = [
    {
      field: "imageUrl",
      headerName: "Image produit",
      renderCell: withRow(ProductImage),
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      renderCell: withRow(ProductDescription),
    },
    {
      field: "price",
      headerName: "Prix",
      renderCell: withRow(ProductPrice),
    },
    {
      field: "condition",
      headerName: "État",
      renderCell: withRow(ProductCondition),
    },
    { field: "stock", headerName: "Stock" },
  ];

  return (
    <>
      <Stack direction="row" justifyContent="center" spacing={6} sx={{ my: 4 }}>
        <TextField label="Recherche" sx={{ width: 400 }} />
        <FormControl>
          <FormLabel id="condition-label">Condition</FormLabel>
          <RadioGroup
            row
            aria-labelledby="condition-label"
            name="condition"
            value={condition}
            onChange={setCondition}
          >
            <FormControlLabel value="new" control={<Radio />} label="Neuf" />
            <FormControlLabel
              value="used"
              control={<Radio />}
              label="Occasion"
            />
          </RadioGroup>
        </FormControl>
      </Stack>
      <DataGrid
        rows={products}
        columns={productColumns}
        disableRowSelectionOnClick
        autoHeight
      />
    </>
  );
}
