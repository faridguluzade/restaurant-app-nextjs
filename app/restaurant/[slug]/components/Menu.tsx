import MenuCard from "./MenuCard";

import { IRestaurantMenu } from "../menu/page";

function Menu({ menu }: { menu: any }) {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        {menu.length > 0 ? (
          <div className="flex flex-wrap justify-between">
            {menu.map((item: any, index: any) => {
              return <MenuCard key={index} item={item} />;
            })}
          </div>
        ) : (
          <div className="flex flex-wrap justify-between text-red-500">
            <p>This restaurant does not have a menu</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Menu;
