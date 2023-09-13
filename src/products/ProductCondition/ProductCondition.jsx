import { oneOf } from "prop-types";

export default function ProductCondition({ condition }) {
  return condition === "new" ? "Neuf" : "Occasion";
}

/**
 *
 * @param {Object} props
 * @param {"new"|"used"} props.condition
 * @returns {React.ReactElement}
 */
ProductCondition.propTypes = {
  condition: oneOf(["new", "used"]),
};
