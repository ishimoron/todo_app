import { useReducer, useEffect } from 'react';
import TodoReducer from "../context/TodoReducer";
import TodoState from "../context/TodoState";

function useLocalStorageReducer(key, reducer, defaultValue) {
  const [state, dispatch] = useReducer(TodoReducer, TodoState, () => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      value = defaultValue;
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}

export default useLocalStorageReducer;