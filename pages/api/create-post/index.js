import dbConnect from "utils/dbConnect";
import nextConnect from "next-connect";
import multer from "multer";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const handler = async (req, res) => {
  // console.log("\n\nREQ RECEIVED:", req, "\n\n");
  const { method } = req;

  try {
    await dbConnect();
  } catch (err) {
    console.log("FAILED CONNECTING TO MONGO:", err);
    return;
  }

  switch (method) {
    case "POST":
      try {
        console.log("\n\n\nREQUEST BODY:", req.body, "\n\n\n");

        for (let entry of req.body.formData.entries()) {
          console.log("\n\nENTRY:", entry);
        }

        // console.log("\n\n\nALL COMMENTS RESPONSE:", allComments);
        return res.status(200).json({ success: true, data: "hi" });
      } catch (e) {
        console.error("FAILED TO FIND COMMENTS:", e);
        res.status(404).json({ success: false, data: e });
      }
      break;
  }
};

export default handler;
