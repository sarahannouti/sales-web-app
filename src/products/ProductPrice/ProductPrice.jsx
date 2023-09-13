import { number } from "prop-types";
import Price from "../../ds/atoms/Price/Price";

export default function ProductPrice({ price }) {
  return <Price value={price} />;
}

ProductPrice.propTypes = {
  price: number,
};
