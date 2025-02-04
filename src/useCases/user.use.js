import { StatusHttp } from "../libs/statusHttp.js";
import { User } from "../models/user.model.js";
import bcrypt from "../libs/bcrypt.js";

// Create
async function create(newUser, file) {
  const { email, password } = newUser;
  const { location, key } = file;
  const userToSave = { ...newUser, avatar: location, keyAvatar: key };
  console.log(email, password);
  const userFound = await User.findOne({ email });

  if (userFound) throw new StatusHttp("Ya existe este email", 404); // Comment: generic message?

  const encryptedPassword = await bcrypt.hash(password);
  console.log(encryptedPassword);
  return User.create({ ...userToSave, password: encryptedPassword });
}

// Update
async function update(idUser, newData, file) {
  const { password } = newData;
  const { location, key } = file;
  const userToSave = { ...newData, avatar: location, keyAvatar: key };
  if (password) {
    const encryptedPassword = await bcrypt.hash(password);
    return await User.findByIdAndUpdate(idUser, {
      ...userToSave,
      password: encryptedPassword,
    });
  } else {
    return await User.findByIdAndUpdate(idUser, userToSave);
  }
}

// Delete
async function deleteById(idUser) {
  const userFound = await User.findById(idUser);

  if (!userFound) throw new StatusHttp("No existe este user", 404);

  return await User.deleteOne({ _id: idUser });
}

// Get By Id
async function getById(idUser) {
  return await User.findById(idUser);
  //.populate("events", "rankings"); // Doubt here, different string
}

// Get All
async function getAll() {
  return await User.find({});
  //.populate("events rankings"); // Doubt here, same string
}

// GetAllByPage
async function getAllByPage(page, limit) {
  console.log(limit);
  return await User.find()
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);
}

export { create, update, deleteById, getById, getAll, getAllByPage };
