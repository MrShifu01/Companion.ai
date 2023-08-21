/**
 * useDebounce is a custom hook that delays the execution of function by a certain amount of time.
 * It's useful when you want to wait until the user stop typing in a text field, for example, before making an API call.
 * 
 * @param value - The value that will be returned after the specified delay.
 * @param delay - The delay (in milliseconds) after which the value will be returned. Default is 500ms.
 * 
 * @returns The debounced value.
 */

import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}