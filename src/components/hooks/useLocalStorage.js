import React from "react";

function useLocalStorage(key, defaultValue) {
  const [value, setValue] = React.useState(() => {
    const existingValue = window.localStorage.getItem(key);
    return existingValue !== null ? JSON.parse(existingValue) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export default useLocalStorage;
