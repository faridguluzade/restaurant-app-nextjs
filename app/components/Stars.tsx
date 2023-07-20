import { UilStar } from "@iconscout/react-unicons";
import { UisStar } from "@iconscout/react-unicons-solid";
import { UisStarHalfAlt } from "@iconscout/react-unicons-solid";

import { calculateReviewAverage } from "../utils/calculateReviewAverage";

function Stars({ reviews }: any) {
  const rating = calculateReviewAverage(reviews);

  // create the icons
  const emptyStar = <UilStar color={"#FAB005"} />;
  const halfStar = <UisStarHalfAlt color={"#FAB005"} />;
  const fullStar = <UisStar color={"#FAB005"} />;

  // determine the full, half, and empty stars
  const fullStars = Math.floor(rating);
  const halfStars = Math.round(rating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  // generate the icon arrays
  const fullStarsArr = Array(fullStars).fill(fullStar);
  const halfStarsArr = Array(halfStars).fill(halfStar);
  const emptyStarsArr = Array(emptyStars).fill(emptyStar);

  // return the combined string inside a div

  return (
    <div className="flex items-center">
      {emptyStarsArr}
      {halfStarsArr}
      {fullStarsArr}
    </div>
  );
}

export default Stars;
