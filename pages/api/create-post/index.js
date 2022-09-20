import dbConnect from "utils/dbConnect";
import nextConnect from "next-connect";
import middleware from "server/middleware";

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  console.log("\n\nBODY:", req.body);
  console.log("FILES:", req.files);

  try {
    await dbConnect();
  } catch (err) {
    console.log("FAILED CONNECTING TO MONGO:", err);
    return;
  }

  try {
    return res.status(200).json({ success: true, data: "hi" });
  } catch (e) {
    res.status(404).json({ success: false, data: e });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
