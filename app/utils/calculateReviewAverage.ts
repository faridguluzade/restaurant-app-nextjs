export const calculateReviewAverage = (reviews: any) => {
  if (!reviews) return 0;

  const rating =
    reviews.length !== 0 &&
    reviews.reduce((acc: any, cur: any) => {
      return acc + cur.rating;
    }, 0) / reviews.length;

  if (!rating) return 0;

  return +rating.toFixed(2);
};
