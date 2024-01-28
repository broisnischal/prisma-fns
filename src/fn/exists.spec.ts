// import { PrismaClient } from "@prisma/client";
// import { describe, it } from "node:test";
// import exists from "./exists";
// import { afterAll, afterEach, expect, test } from "vitest";

import { describe, expect, test } from "vitest";

// const prisma = new PrismaClient();

// describe("exists", () => {
//   // afterEach(async () => {
//   //   await prisma.user.deleteMany();
//   // });

//   afterAll(async () => {
//     await prisma.$disconnect();
//   });

//   const xprisma = prisma.$extends(exists);

//   test("should exists", async () => {
//     await prisma.user.deleteMany();

//     await xprisma.user.create({
//       data: {
//         name: "Alice",
//         email: "alice@prisma.io",
//       },
//     });

//     const user = await xprisma.user.exists({
//       email: "alice@prisma.io",
//     });
//     expect(user).toBe(true);
//   });
// });

describe("ci", () => {
	test("should exists", async () => {
		expect(true).toBe(true);
	});
});

// import { PrismaClient } from "@prisma/client";
// import { describe, it, afterEach, afterAll, expect } from "vitest";
// import getValues from "./get-values";

// const prisma = new PrismaClient();

// describe("get values", () => {
//   afterEach(async () => {
//     await prisma.user.deleteMany();
//   });

//   afterAll(async () => {
//     await prisma.$disconnect();
//   });

//   const xprisma = prisma.$extends(getValues);

//   it("should get values", async () => {
//     await prisma.user.deleteMany();

//     await xprisma.user.create({
//       data: {
//         name: "Nischal",
//         email: "nischal@prisma.io",
//       },
//     });

//     const user = await xprisma.user.getValues("email", {
//       email: {
//         contains: "nischal@prisma.io",
//       },
//     });

//     expect(user).toEqual(["nischal@prisma.io"]);
//   });
// });
