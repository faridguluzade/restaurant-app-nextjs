import Link from "next/link";

import { IRestaurant } from "../page";
import Stars from "../../components/Stars";
import Price from "../../components/Price";

import { calculateReviewAverage } from "../../utils/calculateReviewAverage";
import { Review } from "@prisma/client";

function RestaurantCard({ restaurants }: { restaurants: IRestaurant[] }) {
  const renderRatingText = (reviews: Review[]) => {
    if (reviews.length === 0) {
      return "No rating yet";
    }

    const rating: number = calculateReviewAverage(reviews);

    if (rating === 5) {
      return "Excellent";
    }
    if (rating === 4) {
      return "Very Good";
    }
    if (rating === 3) {
      return "Good";
    }
    if (rating === 2) {
      return "Bad";
    }
    if (rating === 1) {
      return "Very Bad";
    }

    return "No rating yet";
  };

  return (
    <>
      {restaurants.map((restaurant: IRestaurant) => (
        <div className="border-b flex pb-5">
          <img src={restaurant.main_image} alt="" className="w-44 rounded" />
          <div className="pl-5">
            <h2 className="text-3xl">{restaurant.name}</h2>
            <div className="flex items-start">
              <div className="flex mb-2">
                <Stars reviews={restaurant.reviews} />
              </div>
              <p className="ml-2 text-sm">
                {renderRatingText(restaurant.reviews)}
              </p>
            </div>
            <div className="mb-9">
              <div className="font-light flex text-reg">
                <Price price={restaurant.price} />
                <p className="mr-4">{restaurant.cuisinie.name}</p>
                <p className="mr-4">{restaurant.location.name}</p>
              </div>
            </div>
            <div className="text-red-600">
              <Link href={`/restaurant/${restaurant.slug}`}>
                View more information
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default RestaurantCard;
