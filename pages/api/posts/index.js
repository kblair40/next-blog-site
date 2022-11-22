import dbConnect from "utils/dbConnect";
import Post from "server/models/Post";

const getPostById = async (id) => {
  try {
    const post = await Post.findById(id);
    if (post) return post;
  } catch (error) {
    console.log("FAILED FETCHING POST:", error);
  }
};

const getAllPosts = async (limit) => {
  try {
    const posts = await Post.find({}).limit(
      limit ? limit : null
    ); /* gets all posts in db */
    return posts;
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export default async function handler(req, res) {
  const { method, query } = req;

  try {
    await dbConnect();
  } catch (err) {
    console.log("FAILED CONNECTING TO MONGO:", err);
    return;
  }

  switch (method) {
    case "GET":
      let data;
      if (query && query.limit && query.limit === "all") {
        const posts = await getAllPosts();
        return res.status(200).json({ success: true, posts });
      } else if (query && query.id) {
        // console.log("\n\n\n\n\n\nQUERY:", query, "\n\n\n\n\n\n");
        data = await getPostById(query.id);
        return res.status(200).json({ success: true, post: data });
      } else if (query && query.limit) {
        let limit = query.limit;

        data = await getAllPosts(limit);
        return res.status(200).json({ success: true, posts: data });
      } else {
        try {
          let valid;
          if (req.query) {
            valid = req.query["statuses[]"];

            if (!valid) {
              return res.status(200).json({ success: true, posts: [] });
            }
          }

          let statusQuery;
          if (Array.isArray(valid)) {
            let query = valid.map((val) => {
              return { status: parseInt(val) };
            });
            statusQuery = { $or: query };
          } else {
            statusQuery = { status: parseInt(valid) };
          }

          const posts = await Post.find(statusQuery);
          console.log("\n\n\nSTATUS POSTS FOUND:", posts, "\n\n\n");

          return res.status(201).json({ success: true, posts });
        } catch (e) {
          return res.status(400).json({ success: false });
        }
      }
      return res.status(400).json({ success: false, msg: "UNHANDLED ERROR" });
    case "POST":
      try {
        console.log("REQ BODY:", req.body);
        const post = await Post.create({ ...req.body, featured: false });

        res.status(201).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
