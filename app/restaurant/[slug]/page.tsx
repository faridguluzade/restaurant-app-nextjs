import Header from "./components/Header";
import RestaurantNavbar from "./components/RestaurantNavbar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReviewCard from "./components/ReviewCard";
import ReservationCard from "./components/ReservationCard";

import { PrismaClient, PRICE, Cuisinie, Location } from "@prisma/client";

const prisma = new PrismaClient();

export interface IRestaurantDetails {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

const fetchRestaurantDetails = async (
  slug: string
): Promise<IRestaurantDetails> => {
  const restaurantDetails = await prisma.restaurants.findUnique({
    where: {
      slug: slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      // reviews: true,
    },
  });

  if (!restaurantDetails) {
    throw new Error();
  }

  return restaurantDetails;
};

export default async function RestaurantDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const restaurantDetails = await fetchRestaurantDetails(params.slug);

  return (
    <>
      <Header name={params.slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavbar slug={restaurantDetails.slug} />
          <Title name={restaurantDetails.name} />
          <Rating />
          <Description description={restaurantDetails.description} />
          <Images images={restaurantDetails.images} />
          <Reviews>
            <ReviewCard />
          </Reviews>
        </div>
        <div className="w-[27%] relative text-reg">
          <ReservationCard />
        </div>
      </div>
    </>
  );
}
