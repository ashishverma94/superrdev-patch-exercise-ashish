import { useState, useEffect } from "react";
import { fetchTasks } from "../api";
import { useDebounce } from "./useDebounce";

export function useTasks(query, status, page, pageSize) {
  const [tasks, setTasks] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedQuery = useDebounce(query, 1000);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchTasks({ query: debouncedQuery, status, page, pageSize })
      .then((data) => {
        setTasks(data.items);
        setTotal(data.total);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [debouncedQuery, status, page, pageSize]);

  return { tasks, total, loading, error };
}
