"use client";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const Loading = () => {
  return (
    <main>
      <Header>
        <SearchBar />
      </Header>
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse bg-slate-200 w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
          ></div>
        ))}
      </div>
    </main>
  );
};

export default Loading;
