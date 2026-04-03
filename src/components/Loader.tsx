import * as React from "react";

export default function Loader() {
  return (
    <div className="flex flex-col space-y-3 p-4 animate-pulse">
      <div className="h-48 w-full bg-border rounded-xl"></div>
      <div className="space-y-2">
        <div className="h-6 bg-border rounded w-3/4"></div>
        <div className="h-4 bg-border rounded w-full"></div>
        <div className="h-4 bg-border rounded w-1/2"></div>
      </div>
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-8 w-full">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Loader key={i} />
        ))}
      </div>
      <div className="w-full lg:w-80 space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={`side-${i}`} className="h-24 w-full bg-border rounded animate-pulse"></div>
        ))}
      </div>
    </div>
  );
}
