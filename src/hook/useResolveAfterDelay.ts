import { useState, useRef } from "react";

type TUseResolveAfterDelayReturn = [
  (value: string) => void,
  boolean
];

export default function useResolveAfterDelay(fn: Function, time: number): TUseResolveAfterDelayReturn {
  const [isPending, setIsPending] = useState<boolean>(false);
  const counterRef = useRef(0);

  const updateValue = (value: string) => {
    counterRef.current += 1;
    const currentCounter = counterRef.current;

    setTimeout(async () => {
      if (currentCounter !== counterRef.current) return;
      setIsPending(true);
      await fn(value);
      setIsPending(false);
    }, time);
  };

  return [updateValue, isPending];
}
