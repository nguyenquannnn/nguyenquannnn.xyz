import { connectionFactory } from "../../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  function handleError(err: Error) {
    res.statusCode = 500;
    return res.json({ message: err.message });
  }
  switch (req.method) {
    case "POST":
      const connection = await connectionFactory();
      const Subscriber = connection.model("Subscriber");
      console.log("HELLO")
      let subscriber = new Subscriber({
        firstName: req.body.firstName,
        email: req.body.email,
      });
      console.log("HELLO2", subscriber)

      subscriber.save(function (err) {
        if (err) return handleError(err);
        console.log("Saved");
        res.status(200).json({
          "message": "Success"
        })
      });
      break;
    // case "GET":
    //   // res.statusCode = 200;
    //   // res.setHeader("Content-Type", "application/json");
    //   // res.json({ result: "Welcome to my blog!" });

    //   break;
    default:
      res.statusCode = 405;
      res.setHeader("Allow", ["GET", "POST"]);
      return res.json({ message: "Unsupported Method" });
  }
};
