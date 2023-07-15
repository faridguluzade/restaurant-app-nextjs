import SearchBar from "../components/SearchBar";
import SearchSidebar from "./components/SearchSidebar";
import RestaurantCart from "./components/RestaurantCart";

export default function SearchPage() {
  return (
    <>
      <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
        <SearchBar />
      </div>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSidebar />
        <div className="w-5/6">
          <RestaurantCart />
        </div>
      </div>
    </>
  );
}
