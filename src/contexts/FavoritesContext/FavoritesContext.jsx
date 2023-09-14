import { arrayOf, node, string } from "prop-types";
import React from "react";
import { useSet } from "react-use";

const initialFavorites = [
  "8f9529db-6d6c-4ddd-a4f5-32a9a99b4552",
  "8657691e-fad8-4c6e-9f88-e7631cdd1e3c",
];

const FavoritesContext = React.createContext(initialFavorites);

const useContext = () => React.useContext(FavoritesContext);

const Provider = ({ children, favorites = initialFavorites }) => {
  const [favoriteIds, { toggle: toggleFavorite }] = useSet(new Set(favorites));

  return (
    <FavoritesContext.Provider
      value={{ favorites: Array.from(favoriteIds), toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

Provider.propTypes = {
  children: node,
  favorites: arrayOf(string),
};

/**
 * FavoritesContext
 *
 * @example
 *
 * //app.jsx
 * import {FavoritesContext} from "../contexts"
 *
 * <FavoritesContext.Provider favorites={["id1", "id2"]}>
 * <MyComponent />
 * </FavoritesContext.Provider>
 *
 * // MyComponent.jsx
 * import {FavoritesContext} from "../contexts"
 *
 * export default function MyComponent({id}){
 * const {favorites, toggleFavorite} = FavoritesContext.useContext();
 * const isFavorite = favorites.includes(id);
 *
 * return (
 * <Button onClick={() => toggleFavorite(id)}>
 * {isFavorite ?  "Remove" : "Add"}
 * </Button>
 * );
 * }
 */
const CustomFavoritesContext = {
  Provider,
  useContext,
};

export default CustomFavoritesContext;
