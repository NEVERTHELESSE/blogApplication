import { FaThumbsUp } from "react-icons/fa6";
import {
  FaComment,
  FaDownload,
  FaHeart,
  FaShare,
  FaThumbsDown,
} from "react-icons/fa";
export const Like = ({ likes, comments, unlike }) => {
  return (
    <div className="text-2xl justify-between flex">
      <div className="flex items-center" onClick={() => (likes = likes + 1)}>
        <FaThumbsUp className="mr-1 cursor-pointer" />
        <p>{likes}</p>
      </div>
      <div className="flex items-center">
        <FaThumbsDown className="mr-1" />
        <p>{unlike}</p>
      </div>
      <div className="flex items-center">
        <FaComment className="mr-1" />
        <p>{comments}</p>
      </div>
      <div className="flex items-center">
        <FaShare className="mr-1" />
      </div>
      <div className="flex items-center">
        <FaDownload className="mr-1" />
      </div>
      <div className="flex items-center">
        <FaHeart className="mr-1" />
      </div>
    </div>
  );
};
