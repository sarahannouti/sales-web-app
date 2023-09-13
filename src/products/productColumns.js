import { withRow } from "../hoc";
import { ProductActions } from "./ProductActions";
import { ProductCondition } from "./ProductCondition";
import { ProductDescription } from "./ProductDescription";
import { ProductImage } from "./ProductImage";
import { ProductPrice } from "./ProductPrice";

export const productColumns = [
  {
    field: "imageUrl",
    sortable: false,
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
  { field: "stock", headerName: "Stock", storable: false },
  {
    field: "actions",
    headerName: "Actions",
    storable: false,
    renderCell: withRow(ProductActions),
  },
];
