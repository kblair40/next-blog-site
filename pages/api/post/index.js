import dbConnect from "utils/dbConnect";
import Post from "server/models/Post";

const buildQuery = (query) => {
  console.log("BUILD QUERY RCVD:", query, typeof query);
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
      let filter;
      if (query) {
        console.log("\n\nYES QUERY");
        filter = buildQuery(query);
      }
      return res.status(400).json({ success: false, msg: "UNHANDLED ERROR" });
  }
}
