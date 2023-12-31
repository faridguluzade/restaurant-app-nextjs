import Link from "next/link";

import { Cuisinie, Location, PRICE } from "@prisma/client";

export interface ISearchSideBarProps {
  cuisinies: Cuisinie[];
  locations: Location[];
  searchParams: {
    city: string;
    cuisine: string;
    price: PRICE;
  };
}

function SearchSidebar({
  cuisinies,
  locations,
  searchParams,
}: ISearchSideBarProps) {
  const prices = [
    {
      name: PRICE.CHEAP,
      label: "Cheap",
    },
    {
      name: PRICE.REGULAR,
      label: "Regular",
    },
    {
      name: PRICE.EXPENSIVE,
      label: "Expensive",
    },
  ];

  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((location: Location) => (
          <Link
            href={{
              pathname: `/search`,
              query: {
                ...searchParams,
                city: location.name,
              },
              // search?city=toronto
            }}
            className="font-light text-reg capitalize"
          >
            <p>{location.name}</p>
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        {cuisinies.map((cuisine: Cuisinie) => (
          <Link
            href={{
              pathname: `search`,
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
              // search?cuisine=mexico
            }}
            className="font-light text-reg capitalize"
          >
            <p>{cuisine.name}</p>
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex flex-col text-center gap-2 w-32">
          {prices.map(({ name, label }) => (
            <Link
              href={{
                pathname: `search`,
                query: {
                  ...searchParams,
                  price: name,
                  // search?price=regular
                },
              }}
              className="font-light text-reg capitalize rounded-full px-2 py-1 border-2 border-gray-300"
              key={name}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchSidebar;

// restorant.com/search?cuisine=mexico&location=toronto&price=regular
