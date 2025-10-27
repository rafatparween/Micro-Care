"use client"; // ensures this page runs on the client

import { useEffect, useState } from "react";

export default function NotFoundPage() {
  const [storedValue, setStoredValue] = useState(null);

    useEffect(() => {
    // Browser environment check
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("someKey"); // replace "someKey" with your key
      setStoredValue(value);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-4">Page not found.</p>
      {storedValue && (
        <p className="mt-2 text-gray-700">
          Stored value: {storedValue}
        </p>
      )}
    </div>
  );
}
