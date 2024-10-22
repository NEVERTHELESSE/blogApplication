import { Link } from "react-router-dom";
import { posts } from "../../../../post";
async function Recentpost() {
  // const blogs = await posts.slice(0, 20);
  console.log(posts);
  return (
    <div className="my-3 w-[90%]">
      <p className="text-3xl font-bold">Recent Post</p>
      {posts &&
        posts.map((post, index) => (
          <div key={index} className="flex  items-center my-6">
            <img
              src={post.images[0]}
              alt={post.title}
              width={500}
              height={500}
            />
            <div className="mx-4">
              <p className="my-3 font-bold">
                {/* {post.createdAt.toLocaleString()} */}
                <span className="text-red-500 uppercase ml-5 font-light">
                  {post.category}
                </span>
              </p>
              <p className="text-3xl font-bold my-3 first-letter:capitalize">
                {post.title}
              </p>
              <p className="my-4">
                {post.body.length > 300
                  ? `${post.body.slice(0, 300)}...`
                  : post.body}
              </p>
              <Link
                to={`/blog/${post.id}`}
                className="p-2 border m-3 rounded-lg"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      <button>Load More</button>
    </div>
  );
}

export default Recentpost;
