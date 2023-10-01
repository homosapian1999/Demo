import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
  const { email, number } = req.body;
  // console.log(email, number);
  // console.log(typeof email, typeof number);
  const newUser = await new userModel({
    email,
    number,
  }).save();
  return res.status(200).send({
    message: "User is created",
    newUser,
  });
};
