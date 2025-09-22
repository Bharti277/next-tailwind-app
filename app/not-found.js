"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="text-center m-auto">
      <h1>404 - Page Not Found</h1>
      <button onClick={() => router.push("/")}>Go to Home</button>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
};

export default NotFound;
