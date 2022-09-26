import dbConnect from "utils/dbConnect";
import Post from "server/models/Post";

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
      let results = [];
      if (query) {
        results = await Post.find(query);
        console.log("\nRESULTS:", results);
        if (results && results.length) {
          return res.status(200).json({ success: true, results });
        } else {
          return res.status(404).json({ sucess: false, data: [] });
        }
      }
      return res.status(400).json({ success: false, data: [] });
  }
}
