import { useEffect, useState } from "react";

/** Current time in ms, refreshed every `intervalMs`. Null until mounted, so
 *  the prerendered HTML never bakes in a build-time clock; callers render a
 *  static fallback for null. */
export function useNow(intervalMs = 1000): number | null {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);

  return now;
}
