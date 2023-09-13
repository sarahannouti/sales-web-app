import { FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { string } from "prop-types";

export default function ProductActions({ id }) {
  const toggleFavorite = (id) => () => console.log(id);
  return (
    <IconButton onClick={toggleFavorite(id)}>
      <FavoriteBorder />
    </IconButton>
  );
}

ProductActions.propTypes = {
  id: string,
};
