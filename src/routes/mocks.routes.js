import { Router } from "express";
import { generateMockUsers, generateMockPets } from "../utils/mocking.utils.js";
import UserModel from "../models/UserModel.js";
import PetModel from "../models/PetModel.js";

const router = Router();

// Endpoint GET /mockingpets
router.get("/mockingpets", (req, res) => {
  const pets = generateMockPets(100); // cantidad fija o configurable
  res.status(200).json({ status: "success", pets });
});

// Endpoint GET /mockingusers
router.get("/mockingusers", (req, res) => {
  const users = generateMockUsers(50); // cantidad fija como indica la consigna
  res.status(200).json({ status: "success", users });
});

// Endpoint POST /generateData
router.post("/generateData", async (req, res) => {
  const { users = 0, pets = 0 } = req.body;

  try {
    const mockUsers = generateMockUsers(users);
    const mockPets = generateMockPets(pets);

    const insertedUsers = await UserModel.insertMany(mockUsers);
    const insertedPets = await PetModel.insertMany(mockPets);

    res.status(201).json({
      status: "success",
      message: `Se generaron ${insertedUsers.length} usuarios y ${insertedPets.length} mascotas.`,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

export default router;
