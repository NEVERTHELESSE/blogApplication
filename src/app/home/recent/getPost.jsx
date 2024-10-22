"use server";

import { blogModel } from "@/app/backend/blog/blogModel";

async function getpost(limit) {
  const posts = await blogModel.find().limit(limit);
  return await posts;
}

export default getpost;
