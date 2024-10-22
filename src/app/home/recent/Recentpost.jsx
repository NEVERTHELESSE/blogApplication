import { Link } from "react-router-dom";
import { posts } from "../../../../post";

function Recentpost() {
  const blogs = posts.slice(0, 4);
  return (
    <div className="my-3 w-[90%]">
      <p className="text-3xl font-bold">Recent Post</p>

      {blogs.map((blog) => (
        <div key={blog.id} className="flex  items-center my-6">
          <img src={blog.images[0]} alt={blog.title} width={500} height={500} />
          <div className="mx-4">
            <p className="my-3 font-bold">
              {/* {post.createdAt.toLocaleString()} */}
              Just Now
              <span className="text-red-500 uppercase ml-5 font-light">
                {blog.category}
              </span>
              <p className="text-3xl font-bold my-3 first-letter:capitalize">
                {blog.title}
              </p>
              <p className="my-4">
                {blog.body.length > 300
                  ? `${blog.body.slice(0, 300)}...`
                  : blog.body}
              </p>
            </p>
            <Link to={`/blog/${blog.id}`} className="p-2 border m-3 rounded-lg">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recentpost;
