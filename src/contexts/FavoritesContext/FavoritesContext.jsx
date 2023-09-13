import { arrayOf, node, string } from "prop-types";
import React from "react";

const initialFavorites = [
  "8f9529db-6d6c-4ddd-a4f5-32a9a99b4552",
  "8657691e-fad8-4c6e-9f88-e7631cdd1e3c",
];
const FavoritesContext = React.createContext(initialFavorites);

const useContext = () => React.useContext(FavoritesContext);
const Provider = ({ children, favorites = initialFavorites }) => {
  return (
    <FavoritesContext.Provider value={{ favorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

Provider.propTypes = {
  children: node,
  favorites: arrayOf(string),
};

const CustomFavoritesContext = {
  Provider,
  useContext,
};
export default CustomFavoritesContext;
