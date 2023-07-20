import RestaurantNavbar from "../components/RestaurantNavbar";
import Header from "../components/Header";
import Menu from "../components/Menu";

import { PrismaClient, PRICE, Cuisinie, Location } from "@prisma/client";

const prisma = new PrismaClient();

export interface IRestaurantMenu {
  items: string[];
}

const fetchRestaurantMenu = async (slug: string): Promise<IRestaurantMenu> => {
  const restaurantMenu = await prisma.restaurants.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurantMenu) {
    throw new Error();
  }
  // @ts-ignore
  return restaurantMenu.items;
};

export default async function RestaurantMenuPage({
  params,
}: {
  params: { slug: string };
}) {
  const restaurantMenu = await fetchRestaurantMenu(params.slug);

  return (
    <>
      <Header name={params.slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavbar slug={params.slug} />
          <Menu menu={restaurantMenu} />
        </div>
      </div>
    </>
  );
}
