import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Navigate from "./Navigate";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-4 flex justify-between text-2xl">
      <div className="flex w-[13%] justify-between">
        <Link to="http://facebook.com">
          <FaFacebook color="blue" size={30} />
        </Link>
        <Link to="http://instagram.com">
          <FaInstagram color="red" size={30} />
        </Link>
        <Link to="http://tiktok.com">
          <FaTiktok size={30} />
        </Link>
        <Link to="http://youtube.com">
          <FaYoutube color="red" size={30} />
        </Link>
      </div>
      <p>Neverthelesse</p>
      <Navigate />
    </div>
  );
}

export default Header;
