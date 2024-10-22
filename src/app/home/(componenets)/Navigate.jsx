import Theme from "./Theme";
import { Link } from "react-router-dom";

const navigates = [
  {
    name: "homepage",
    link: "/",
  },
  {
    name: "page",
    link: "/page",
  },
  {
    name: "contact",
    link: "/contact",
  },
  {
    name: "about",
    link: "/about",
  },
  {
    name: "login",
    link: "/login",
  },
];
function Navigate() {
  return (
    <div className="flex capitalize w-[38%] justify-between">
      <Theme />
      {navigates.map((navigate, index) => (
        <Link to={navigate.link} key={index}>
          {navigate.name}
        </Link>
      ))}
    </div>
  );
}

export default Navigate;
