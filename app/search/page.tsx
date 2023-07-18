import { PrismaClient, PRICE, Location, Cuisinie } from "@prisma/client";

import Header from "./components/Header";
import SearchSidebar from "./components/SearchSidebar";
import RestaurantCard from "./components/RestaurantCard";

const prisma = new PrismaClient();

export interface IRestaurant {
  id: number;
  name: string;
  description: string;
  main_image: string;
  slug: string;
  cuisinie: Cuisinie;
  location: Location;
  price: PRICE;
  // reviews: Reviews,
}

const fetchRestaurants = async (city: string): Promise<IRestaurant[]> => {
  const restaurants = prisma.restaurants.findMany({
    where: {
      location: {
        name: {
          equals: city.toLocaleLowerCase(),
        },
      },
    },
    select: {
      id: true,
      name: true,
      description: true,
      main_image: true,
      slug: true,
      cuisinie: true,
      location: true,
      // reviews: true,
    },
  });

  if (!restaurants) {
    throw new Error();
  }

  return restaurants;
};

const fetchCuisinies = async () => {
  const cuisinies = prisma.cuisinie.findMany({
    select: {
      name: true,
    },
  });

  if (!cuisinies) {
    throw new Error();
  }

  return cuisinies;
};

const fetchLocations = async () => {
  const locations = await prisma.location.findMany({
    select: {
      name: true,
    },
  });

  if (!locations) {
    throw new Error();
  }

  return locations;
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchRestaurants(searchParams.city);
  const cuisinies = await fetchCuisinies();
  const locations = await fetchLocations();

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSidebar cuisinies={cuisinies} locations={locations} />
        <div className="w-5/6">
          {restaurants.length > 0 ? (
            <RestaurantCard restaurants={restaurants} />
          ) : (
            <p className="text-red-500">
              Sorry, we found no restaurants in this area
            </p>
          )}
        </div>
      </div>
    </>
  );
}
