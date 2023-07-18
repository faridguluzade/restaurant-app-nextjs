import Link from "next/link";

import { IRestaurant } from "../page";
import Stars from "../../components/Stars";
import Price from "../../components/Price";

function RestaurantCard({ restaurants }: { restaurants: IRestaurant[] }) {
  return (
    <>
      {restaurants.map((restaurant: IRestaurant) => (
        <div className="border-b flex pb-5">
          <img src={restaurant.main_image} alt="" className="w-44 rounded" />
          <div className="pl-5">
            <h2 className="text-3xl">{restaurant.name}</h2>
            <div className="flex items-start">
              <div className="flex mb-2">
                <Stars />
              </div>
              <p className="ml-2 text-sm">Awesome</p>
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
