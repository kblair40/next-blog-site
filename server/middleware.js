import nextConnect from "next-connect";
import multiparty from "multiparty";

const middleware = nextConnect();

middleware.use(async (req, res, next) => {
  const form = new multiparty.Form();

  console.log("BODY:", req.body);

  await form.parse(req, function (err, fields, files) {
    console.log("\nFIELDS/FILES:", { fields, files });
    req.body = fields;
    req.files = files;

    next();
  });
});

export default middleware;
