import { PrismaClient } from "@prisma/client";
import { describe, it } from "node:test";
import exists from "./exists";
import { afterAll, afterEach, expect, test } from "vitest";

const prisma = new PrismaClient();

describe("exists", () => {
  // afterEach(async () => {
  //   await prisma.user.deleteMany();
  // });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  const xprisma = prisma.$extends(exists);

  test("should exists", async () => {
    await prisma.user.deleteMany();

    await xprisma.user.create({
      data: {
        name: "Alice",
        email: "alice@prisma.io",
      },
    });

    const user = await xprisma.user.exists({
      email: "alice@prisma.io",
    });
    expect(user).toBe(true);
  });
});
