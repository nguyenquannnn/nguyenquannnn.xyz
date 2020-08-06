import { connectionFactory } from "../../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { Error } from "mongoose";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  function handleError(err) {
    res.statusCode = 500;
    return res.json({
      error: { message: err.message, name: err.name, code: err.code },
    });
  }
  switch (req.method) {
    case "PUT":
      const connection = await connectionFactory();
      const Subscriber = connection.model("Subscriber");
      try {
        const result = await Subscriber.findOneAndUpdate(
          {
            email: req.body.email,
          },
          {
            subscribing: false,
            updatedOn: Date.now(),
          }
        );
        if (result) {
          res.status(200).json({
            message: `Unsubscribed successfully for address ${
              result.toJSON().email
            }`,
          });
        } else {
          handleError({
            message: `No record found for email address: ${req.body.email}`,
            name: "Record Not Found",
            code: 11500,
          });
        }
      } catch (err) {
        handleError(err);
      }
      break;

    default:
      res.statusCode = 405;
      res.setHeader("Allow", ["PUT"]);
      return res.json({
        error: { message: "Unsupported Method", name: "Unsupported Method" },
      });
  }
};
