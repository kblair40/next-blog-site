import dbConnect from "utils/dbConnect";
import Subscriber from "server/models/Subscriber";

// const getAllSubscribers = async (id) => {
//   try {
//     const subscribers = await Subscriber.findById(id);
//     if (subscribers) return subscribers;
//   } catch (error) {
//     console.log("FAILED FETCHING SUBSCRIBERS:", error);
//   }
// };

// const addSubscriber = async (email, name) => {
//   console.log("RCVD:", { email, name });
// };

export default async function handler(req, res) {
  // console.log("\n\nSUB REQ RECEIVED:", req, "\n\n");
  const { method } = req;

  try {
    await dbConnect();
  } catch (err) {
    console.log("FAILED CONNECTING TO MONGO:", err);
    return;
  }

  switch (method) {
    case "GET":
      console.log("\n\n\n\n\nNEW");
      try {
        let valid;
        if (req.query) {
          valid = req.query["statuses[]"];

          if (!valid) {
            return res.status(200).json({ success: true, data: [] });
          }
        }

        let statusQuery;
        if (Array.isArray(valid)) {
          console.log("array");
          let query = valid.map((val) => {
            return { status: parseInt(val) };
          });
          statusQuery = { $or: query };
        } else {
          statusQuery = { status: parseInt(valid) };
          // statusQuery = [{ status: parseInt(valid) }];
        }
        console.log("STATUS QUERY:", statusQuery);

        // const subscribers = await Subscriber.find({ $or: statusQuery });
        const subscribers = await Subscriber.find(statusQuery);
        console.log("\nFOUND SUBSCRIBERS:", subscribers);

        return res.status(201).json({ success: true, data: subscribers });
      } catch (e) {
        return res.status(400).json({ success: false });
      }
    case "PATCH":
      try {
        const id = req.body.subscriberId;
        const subscriber = await Subscriber.findById(id);

        if (subscriber) {
          subscriber.status = req.body.status;
          const updatedSubscriber = await subscriber.save();
          console.log("\n\nUPDATED SUBSCRIBER:", updatedSubscriber, "\n\n");

          return res
            .status(201)
            .json({ success: true, data: updatedSubscriber });
        } else {
          return res.status(400).json({ success: false });
        }
      } catch (e) {
        return res.status(400).json({ success: false });
      }
      break;
    case "POST":
      console.log("\n\nREQ.BODY:", req.body);
      // return res.status(200).send({ success: true });
      try {
        // const subscriber = await Subscriber.create(req.body);
        const subscriber = new Subscriber(req.body);
        const newSubscriber = await subscriber.save();
        console.log("\n\nnewSubscriber:", newSubscriber, "\n\n");
        return res.status(201).json({ success: true, data: subscriber });
      } catch (error) {
        console.log("\n\nERROR:", error);
        return res.status(400).json({ success: false });
      }
    // break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
