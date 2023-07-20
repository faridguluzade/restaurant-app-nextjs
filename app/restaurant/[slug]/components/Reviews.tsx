import React from "react";

import ReviewCard from "./ReviewCard";

function Reviews({ reviews }: { reviews: any }) {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
        What
        {reviews.length === 1 ? "person is" : ` ${reviews.length} people are `}
        saying
      </h1>
      <div>
        {reviews.map((review: any) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
