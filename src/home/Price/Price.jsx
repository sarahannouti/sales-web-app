import { number, oneOf } from "prop-types";

const availableCurrencies = ["EUR", "USD"];

/**
 *
 * @param {Object} props
 * @param {number} props.value Price value
 * @param {string} props.currency Price currency
 * @returns {React.ReactElement}
 */
export default function Price({ value, currency = "Eur" }) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
  }).format(value);
}

Price.propTypes = {
  value: number,
  currency: oneOf(availableCurrencies),
};
