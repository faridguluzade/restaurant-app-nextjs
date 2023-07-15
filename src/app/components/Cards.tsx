import React from "react";

function Cards({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
      {children}
    </div>
  );
}

export default Cards;
