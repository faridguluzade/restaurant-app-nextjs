import Image from "next/image";
import { Inter } from "@next/font/google";
import React from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";
import Card from "./components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header>
        <SearchBar />
      </Header>
      <Cards>
        <Card />
      </Cards>
    </main>
  );
}
