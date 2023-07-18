import Link from "next/link";

import { Cuisinie, Location } from "@prisma/client";

function SearchSidebar({ cuisinies, locations }: any) {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((location: Location) => (
          <Link
            href={{
              pathname: `/search?city=${location.name}`,
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
              pathname: `search?cuisine=${cuisine.id}`,
            }}
            className="font-light text-reg capitalize"
          >
            <p>{cuisine.name}</p>
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <Link
            href={{
              pathname: "/search",
            }}
          >
            label
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchSidebar;
