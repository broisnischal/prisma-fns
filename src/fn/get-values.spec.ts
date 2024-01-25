import { PrismaClient } from "@prisma/client";
import { describe, it, afterEach, afterAll, expect } from "vitest";
import getValues from "./get-values";

const prisma = new PrismaClient();

describe("get values", () => {
  // afterEach(async () => {
  //   await prisma.user.deleteMany();
  // });

  // afterAll(async () => {
  //   await prisma.$disconnect();
  // });

  const xprisma = prisma.$extends(getValues);

  // it("should get values", async () => {
  //   await prisma.user.deleteMany();

  //   await xprisma.user.create({
  //     data: {
  //       name: "Nischal",
  //       email: "nischal@prisma.io",
  //     },
  //   });

  //   const user = await xprisma.user.getValues("email", {
  //     email: {
  //       contains: "nischal@prisma.io",
  //     },
  //   });

  //   expect(user).toEqual(["nischal@prisma.io"]);
  // });
});
