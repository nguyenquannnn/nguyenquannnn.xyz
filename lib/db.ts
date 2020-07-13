import Mongoose from "mongoose";
import { checkEmail } from "./utilities";

const CONNECTION_URL = "mongodb://localhost/27017";
let DB_CONNECTION = undefined;

async function initialize(): Promise<Mongoose.Connection> {
  return new Promise((resolve, reject) => {
    Mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    Mongoose.set('useCreateIndex', true);
    Mongoose.set('useFindAndModify', false);
    const db = Mongoose.connection;
    db.on("error", (err) => {
      console.error("connection error:", err);
      reject(err);
    });
    db.once("open", function () {
      console.log("Connection opened");
      resolve(db);
    });
  });
}

// function compileSchema(): [Mongoose.Model<Mongoose.Document, {}>] {
export const subscriberSchema = new Mongoose.Schema({
  _someId: Mongoose.Schema.Types.ObjectId,
  firstName: String,
  email: {
    type: String,
    unique: true,
    index: true,
    trim: true,
    validate: checkEmail,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  updatedOn: {
    type: Date,
    default: Date.now,
  },
  subscribing: { type: Boolean, default: true },
});
subscriberSchema.methods.unsubscribe = function () {
  this.subscribing = false;
};
// const models = { Subscriber: subscriberSchema };
// Object.keys(models).forEach((model) => Mongoose.model(model, models[model]));

// export const Subscriber = Mongoose.model('Subscriber', subscriberSchema);
// subscriberSchema.statics.findByEmail = function (cb) {
//     Animal.find({ hasTail: true }, cb);
// };
//   const Subscriber = Mongoose.model("Subscriber", subscriberSchema);
//   return [Subscriber];
// }

export async function connectionFactory(): Promise<Mongoose.Connection> {
    console.log("DB CONNECTION", DB_CONNECTION)
  if (!DB_CONNECTION) {
    const conn = await initialize();
    Mongoose.connection.models = {};
    const models = { Subscriber: subscriberSchema };
    Object.keys(models).forEach((model) => conn.model(model, models[model]));
    DB_CONNECTION = conn;
    return conn;
  } else {
    return DB_CONNECTION;
  }
}
