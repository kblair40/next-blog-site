// import dbConnect from "utils/dbConnect";
// import Post from "server/models/Post";

// const getPostById = async (id) => {
//   try {
//     const post = await Post.findById(id);
//     if (post) return post;
//   } catch (error) {
//     console.log("FAILED FETCHING POST:", error);
//   }
// };

// const getAllPosts = async (limit) => {
//   try {
//     const posts = await Post.find({}).limit(limit); /* gets all posts in db */
//     return posts;
//   } catch (error) {
//     res.status(400).json({ success: false });
//   }
// };

// export default async function handler(req, res) {
//   // console.log("\n\nREQ RECEIVED:", req, "\n\n");
//   const { method, query } = req;

//   console.log("\n\n\nREQ QUERY:", req.query, "\n\n\n");

//   try {
//     await dbConnect();
//   } catch (err) {
//     console.log("FAILED CONNECTING TO MONGO:", err);
//     return;
//   }

//   switch (method) {
//     case "GET":

//       let data;
//       if (query && query.id) {
//         data = await getPostById(query.id);
//         return res.status(200).json({ success: true, post: data });
//       } else if (query && query.limit) {
//         let limit = query.limit;

//         data = await getAllPosts(limit);
//         return res.status(200).json({ success: true, posts: data });
//       } else {
//         try {
//           let valid;
//           if (req.query) {
//             valid = req.query["statuses[]"];

//             if (!valid) {
//               return res.status(200).json({ success: true, posts: [] });
//             }
//           }

//           let statusQuery;
//           if (Array.isArray(valid)) {
//             console.log("array");
//             let query = valid.map((val) => {
//               return { status: parseInt(val) };
//             });
//             statusQuery = { $or: query };
//           } else {
//             statusQuery = { status: parseInt(valid) };
//             // statusQuery = [{ status: parseInt(valid) }];
//           }
//           console.log("STATUS QUERY:", statusQuery);

//           // const posts = await Post.find({ $or: statusQuery });
//           const posts = await Post.find(statusQuery);
//           console.log("\nFOUND POSTS:", posts);

//           return res.status(201).json({ success: true, posts });
//         } catch (e) {
//           return res.status(400).json({ success: false });
//         }
//       }
//     case "POST":
//       try {
//         const post = await Post.create(req.body);

//         res.status(201).json({ success: true, data: post });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// }
