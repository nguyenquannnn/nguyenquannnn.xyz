import { connectionFactory } from "../../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  function handleError(err) {
    res.statusCode = 500;
    return res.json({
      error: { message: err.message, name: err.name, code: err.code },
    });
  }
  switch (req.method) {
    case "POST":
      const connection = await connectionFactory();
      const Subscriber = connection.model("Subscriber");
      try {
        const doc = await Subscriber.findOne({ email: req.body.email }, null);
        if (doc) {
          await doc.updateOne({
            subscribing: true,
          });
          return res.status(200).json({
            message: "Success",
          });
        } else {
          let subscriber = new Subscriber({
            firstName: req.body.firstName,
            email: req.body.email,
          });

          await subscriber.save();
          return res.status(200).json({
            message: "Success",
          });
        }
      } catch (err) {
        handleError(err);
      }
      break;
    default:
      res.statusCode = 405;
      res.setHeader("Allow", ["POST"]);
      return res.json({
        error: { message: "Unsupported Method", name: "Unsupported Method" },
      });
  }
};
