import React, { useState, useEffect, useContext, createContext } from "react";

const cacheContext = createContext();

export function ProvideCache({ children }) {
  const cache = useProvideCache();
  return <cacheContext.Provider value={cache}>{children}</cacheContext.Provider>;
}

export const useCache = () => {
  return useContext(cacheContext);
};

function useProvideCache(key, initialValue) {
	const [value, setValue] = useState(() => {
		const storedValue = localStorage.getItem(key);
		return storedValue !== null ? JSON.parse(storedValue) : initialValue;
	});

	useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const remove = (key) => {
		localStorage.removeItem(key);
		setValue(false);
  };

  useEffect(() => {
    const unsubscribe = (value) => {
      if (value) {
        setValue(value);
      } else {
        setValue(false);
      }
    };

    return () => unsubscribe();
  }, []);

  return {
		value,
		setValue,
		remove,
  };
}
