import { PrismaClient, PRICE, Location, Cuisinie } from "@prisma/client";

// components
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";
import Card from "./components/Card";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const prisma = new PrismaClient();

export interface IRestaurant {
  id: number;
  name: string;
  main_image: string;
  cuisinie: Cuisinie;
  location: Location;
  price: PRICE;
  slug: string;
}

const fetchRestaurants = async (): Promise<IRestaurant[] | any> => {
  const restaurants = await prisma.restaurants.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisinie: true,
      location: true,
      price: true,
      slug: true,
    },
  });

  if (!restaurants) {
    throw new Error();
  }

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
