import { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      return localStorageItem
        ? JSON.parse(localStorageItem)
        : initialValue;
    } catch {
      return initialValue;
    }
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch {
      setError(true);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export default useLocalStorage;
