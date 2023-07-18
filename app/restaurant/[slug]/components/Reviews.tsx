import React from "react";

function Reviews({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
        What 100 people are saying
      </h1>
      <div>
        {/* REVIEW CARD */}
        {children}
        {/* REVIEW CARD */}
      </div>
    </div>
  );
}

export default Reviews;
