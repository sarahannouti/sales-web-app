import { LinearProgress, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { FavoritesContext } from "../../contexts";
import { useProductsByIds } from "../../hooks";
import { productColumns } from "../productColumns";

export default function FavoritesPage() {
  const { favorites } = FavoritesContext.useContext();
  const {
    isLoading,
    error,
    data: favoriteProducts,
  } = useProductsByIds({ ids: favorites });

  if (error) throw "oulala";

  return (
    <>
      <Typography component="h1">Favorites</Typography>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <DataGrid
          rows={favoriteProducts}
          columns={productColumns}
          disableRowSelectionOnClick
          autoHeight
        />
      )}
    </>
  );
}
