import React from "react";
import { posts } from "../../../../post";
import { categories } from "../category/category";
import { Link } from "react-router-dom";

function Popular() {
  return (
    <div className="my-3 w-[23rem]">
      <p className="text-3xl font-bold mb-3">Most Popular</p>
      {categories.map((p) =>
        posts
          .filter((r) => r.category == p.name)
          .map((container) => (
            <div key={container?.id} className="my-3">
              <Link
                to={"/blog/" + container.id}
                className=" rounded-lg font-bold p-1 px-3 capitalize"
                style={{ background: p.color }}
              >
                {container?.category}
              </Link>
              <br />
              <Link
                to={"/blog/" + container.id}
                className="w-full text-2xl my-2 capitalize"
              >
                {container?.title}
              </Link>
              <div>
                <span className="font-bold">{container?.author.full_name}</span>
                <span className="ml-5">18-03-2023</span>
              </div>
            </div>
          ))
      )}
    </div>
  );
}

export default Popular;
