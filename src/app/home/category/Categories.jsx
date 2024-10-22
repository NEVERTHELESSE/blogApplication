import { categories } from "./category";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="flex">
      {categories.map((category, index) => (
        <Link
          to={`/category/${category.name}`}
          key={index}
          className="text-2xl capitalize mx-2 p-2 rounded-lg  flex w-auto"
          style={{
            background: category.color,
          }}
        >
          <img
            src={category.image_url}
            alt={category.name}
            width={30}
            height={30}
            className="rounded-full mr-2"
          />
          <p>{category.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
