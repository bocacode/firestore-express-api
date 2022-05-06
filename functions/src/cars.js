import { dbConnect } from "./dbConnect.js";

export const getCars = async (req, res) => {
  const db = dbConnect();
  const cars = await db.collection("cars").get();
  const carsArray = cars.docs.map(doc => doc.data());
  res.status(200).send(carsArray);
}
