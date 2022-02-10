import { useState } from 'preact/hooks';

//speicial custom hook
export default function useCounter() {
  const [value, setValue] = useState(0);
  const Increment = () => {
    setValue(value + 1);
  };

  return {
    value,
    Increment,
  };
}
