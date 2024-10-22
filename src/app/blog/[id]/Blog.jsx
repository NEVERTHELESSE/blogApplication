import { Like } from "./Likes";
import Popular from "../../home/popular/Popular";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { posts } from "../../../../post";

export default function Blog() {
  const location = useLocation().pathname.split("/")[2];
  const post = posts.find((r) => r.id == location);
  const [reply, setReply] = useState("");

  const addcomment = async () => {};
  return (
    <div className="mt-14">
      <div className="flex justify-between">
        {post ? (
          <div>
            <div>
              <div className="flex">
                <div>
                  <p className="text-7xl font-bold mr-8 capitalize">
                    {post.title}
                  </p>
                  <div className="my-8">
                    <div className="flex">
                      <img
                        src={post.author.profile_pics}
                        width={50}
                        className="max-h-[50px] max-w-[50px] min-h-[50px] min-w-[50px] rounded-full border mr-3 "
                        height={50}
                        alt={post.author.full_name}
                      />
                      <div>
                        <p className="text-2xl font-bold">
                          {post.author.full_name}
                        </p>
                        Just Now
                        {/* <p>{post.createdAt.toLocaleString()}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[40rem]">
                  {/* <div className="relative w-[40rem] h-[30rem]"> */}
                  <img
                    src={post.images[0]}
                    alt="image"
                    className="min-h-[400px] min-w-[600px]"
                    // fill
                    width={700}
                    height={700}
                    id="img"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="w-[70%] mr-14">
                  <p className="text-2xl mt-3 text-justify">{post.body}</p>
                  <Like
                    likes={post.likes}
                    comments={post.comment.length}
                    unlike={post.unlike}
                  />
                  <div className="flex items-center">
                    <img
                      src="/author/user3.jpg"
                      width={50}
                      height={50}
                      alt="user_pics"
                      className="rounded-full border p-1 max-w-[50px] max-h-[50px]"
                    />
                    <input
                      placeholder="Enter your comments"
                      name="comment"
                      className="ml-2 p-2 w-[35rem] rounded-lg bg-transparent border text-2xl my-2 px-3"
                      onChange={(e) => setReply(e.target.value)}
                    />
                    <button
                      onSubmit={addcomment}
                      type="submit"
                      className="bg-foreground text-back py-3 px-7 ml-3 rounded-lg font-bold"
                    >
                      Submit
                    </button>
                  </div>
                  <p className="text-3xl my-2 font-bold">Comments</p>
                  <div>
                    {post.comment.map((r) => (
                      <div
                        key={r.user_id}
                        className="flex items-center my-2 border rounded-lg p-2"
                      >
                        <img
                          src={r.profile_pics}
                          width={50}
                          height={50}
                          alt="img"
                          className="rounded-full mr-1 border p-1 "
                        />
                        <div>
                          <p className="font-bold">{r.full_name}</p>
                          <p>{r.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Popular />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>no blog found</p>
          </div>
        )}
      </div>
    </div>
  );
}
