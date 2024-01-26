# Prisma Utils

##### v1.2.0 Just landed :rocket:

[![npm version](https://img.shields.io/npm/v/prisma-fns.svg)](https://www.npmjs.com/package/prisma-fns)
[![Build Status](https://travis-ci.org/broisnischal/prisma-fns.svg?branch=master)](https://travis-ci.org/broisnischal/prisma-fns)
![GitHub Repo stars](https://img.shields.io/github/stars/broisnischal/prisma-fns?style=social)
![GitHub top language](https://img.shields.io/github/languages/top/broisnischal/prisma-fns?style=plastic)
[![License](https://img.shields.io/npm/l/prisma-fns.svg)](https://opensource.org/licenses/MIT)

Prisma Utils is a revolutionary utility extension for seamless Prisma integration. It enhances your workflow, simplifies common tasks and functions, and boosts the efficiency of your Prisma-powered applications.

## Features

- **Reusable fns:** Construct complex queries effortlessly.
- **Utilities:** Additional tools to enhance your Prisma experience.

## Installation

```bash
npm install prisma-fns
```

## Basic Usage

```ts
import { PrismaClient } from "@prisma/client";
import { log, exists, getValues, generateSlug, save } from "prisma-fns";

// Create a new instance of PrismaClient extended with various functions
const prisma = new PrismaClient()
  .$extends(log)
  .$extends(exists)
  .$extends(getValues)
  .$extends(generateSlug)
  .$extends(save);

// Now you can use the prisma instance with the added functions

// Example: Check if a user with a specific ID exists
async function doesUserExist(userId: number) {
  const userExists = await prisma.$exists.user({ id: userId });
  prisma.$log(
    `User with ID ${userId} ${userExists ? "exists" : "does not exist"}`
  );
}

// Example: Get values from the database
async function getAllUsers() {
  const users = await prisma.$getValues.user.findMany();
  prisma.$log(`All users: ${JSON.stringify(users)}`);
}

// Example: Generate a slug
const title = "Example Blog Post Title";
const slug = prisma.$generateSlug(title);
prisma.$log(`Generated slug for "${title}": ${slug}`);

// Example: Save data to the database
const newData = {
  /* Your data here */
};
const savedData = await prisma.$save.modelName.create({ data: newData });
prisma.$log(`Saved data: ${JSON.stringify(savedData)}`);

// Example: Closing the Prisma client
async function closePrisma() {
  await prisma.$disconnect();
  prisma.$log("Prisma client disconnected.");
}
```

## Support

If you like the project, please consider supporting us by giving a ⭐️ on Github.

### Bugs

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/broisnischal/prisma-fns/issues)

### Contributing

If you'd like to contribute, please follow our contribution guidelines.

### License

prisma-fns is open-source software licensed under the MIT [license](LICENSE).
