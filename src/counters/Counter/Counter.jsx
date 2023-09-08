import { useCounter } from "../../hooks";
import { number } from "prop-types";

export default function Counter({ initialValue = 0, step = 1 }) {
  const [counter, { increment, decrement }] = useCounter(initialValue, step);

  if (initialValue < 0) return <p>OUPS</p>;

  return (
    <>
      <p>{counter}</p>
      <button onClick={increment}>+{step}</button>
      <button onClick={decrement}>-{step}</button>
    </>
  );
}

Counter.propTypes = {
  initialValue: number,
  step: number,
};
