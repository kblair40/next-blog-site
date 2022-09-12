import dbConnect from "utils/dbConnect";

export default async function handler(req, res) {
  const { method } = req;

  try {
    await dbConnect();
  } catch (err) {
    console.log("FAILED CONNECTING TO MONGO:", err);
  }

  switch (method) {
    case "GET":
      try {
        // const pets = await Pet.find({}); /* find all the data in our database */
        // res.status(200).json({ success: true, data: pets });
      } catch (error) {
        // res.status(400).json({ success: false });
      }
    // break;
    case "POST":
      try {
        // const pet = await Pet.create(
        //   req.body
        // ); /* create a new model in the database */
        // res.status(201).json({ success: true, data: pet });
      } catch (error) {
        // res.status(400).json({ success: false });
      }
    // break;
    default:
    // res.status(400).json({ success: false });
    // break;
  }

  return res.status(200).send({ msg: "not ready yet" });
}
