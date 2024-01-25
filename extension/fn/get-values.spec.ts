import { PrismaClient } from "@prisma/client";
import { describe, it, afterEach, afterAll, expect } from "vitest";
import getValues from "./get-values";

const prisma = new PrismaClient();

describe("get values", () => {
  afterEach(async () => {
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  const xprisma = prisma.$extends(getValues);

  it("should get values", async () => {
    await xprisma.user.create({
      data: {
        name: "Alice",
        email: "alice@prisma.io",
      },
    });

    const user = await xprisma.user.getValues("email", {
      email: {
        contains: "@",
      },
    });

    expect(user).toEqual(["alice@prisma.io"]);
  });
});
