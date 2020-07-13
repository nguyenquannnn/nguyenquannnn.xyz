import { connectionFactory } from "../../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  function handleError(err: Error) {
    res.statusCode = 500;
    return res.json({ message: err.message });
  }
  switch (req.method) {
    case "PUT":
      const connection = await connectionFactory();
      const Subscriber = connection.model("Subscriber");
      Subscriber.findOneAndUpdate(
        {
          email: req.body.email,
        },
        {
          subscribing: false,
          updatedOn: Date.now(),
        }
      ).exec((err, result) => {
        if (err) handleError(err);
        else {
          res.status(200).json({
            message: `Unsubscribed successfully for address ${
              result.toJSON().email
            }`,
          });
        }
      });
      break;

    default:
      res.statusCode = 405;
      res.setHeader("Allow", ["PUT"]);
      return res.json({ message: "Unsupported Method" });
  }
};
