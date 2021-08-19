import { useState } from "react";

interface UseCounterProps {
  initialCounter: number;
}

export interface UseCounter {
  counter: number;
  onAdd: () => void;
  onSubtract: () => void;
}

function useCounter({ initialCounter = 0 }: UseCounterProps): UseCounter {
  const [counter, setCounter] = useState(initialCounter);

  function onAdd(): void {
    setCounter(counter + 1);
  }

  function onSubtract(): void {
    setCounter(counter - 1);
  }

  return { counter, onAdd, onSubtract };
}

export default useCounter;
