import { faker } from "@faker-js/faker";
import { createHash } from "./password.utils.js";

// Genera usuarios con formato Mongo
export const generateMockUsers = (num) => {
  const roles = ["user", "admin"];
  const users = [];

  for (let i = 0; i < num; i++) {
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: createHash("coder123"),
      role: roles[Math.floor(Math.random() * roles.length)],
      pets: [],
    });
  }

  return users;
};

export const generateMockPets = (num) => {
    const types = ["dog", "cat", "parrot", "hamster"];
    const petNames = ["Buddy", "Luna", "Rocky", "Bella", "Toby", "Milo", "Nina", "Coco", "Simba", "Max"];
    const pets = [];
  
    for (let i = 0; i < num; i++) {
      pets.push({
        name: petNames[Math.floor(Math.random() * petNames.length)],
        specie: types[Math.floor(Math.random() * types.length)],
        age: faker.number.int({ min: 1, max: 15 }),
      });
    }
  
    return pets;
  };
