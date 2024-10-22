import React from "react";
import Introduction from "./home/(componenets)/Introduction";
import FirstRandom from "./home/(componenets)/FirstRandom";
import Categories from "./home/category/Categories";
import Recentpost from "./home/recent/Recentpost";
import Popular from "./home/popular/Popular";

export default function Home() {
  return (
    <div>
      <Introduction />
      <FirstRandom />
      <Categories />

      <div className="flex">
        <Recentpost />
        <Popular />
      </div>
    </div>
  );
}
