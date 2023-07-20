import {
  PrismaClient,
  PRICE,
  Location,
  Cuisinie,
  Review,
} from "@prisma/client";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

// components
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";
import Card from "./components/Card";

const prisma = new PrismaClient();

export interface IRestaurant {
  id: number;
  name: string;
  main_image: string;
  cuisinie: Cuisinie;
  location: Location;
  price: PRICE;
  slug: string;
  reviews: Review[];
}

const fetchRestaurants = async (): Promise<IRestaurant[]> => {
  const restaurants = await prisma.restaurants.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisinie: true,
      location: true,
      slug: true,
      price: true,
      reviews: true,
    },
  });

  if (!restaurants) {
    throw new Error();
  }

  // @ts-ignore
  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <main>
      <Header>
        <SearchBar />
      </Header>
      <Cards>
        {restaurants.map((restaurant: IRestaurant) => (
          <Card key={restaurant.id} restaurant={restaurant} />
        ))}
      </Cards>
    </main>
  );
}
