import { PrismaClient } from "@prisma/client";
import getValues from "./extension/prisma-utilityfn";

const prisma = new PrismaClient().$extends(getValues);

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Alice",
  //     email: "alice@prisma.io",
  //   },
  // });

  const user = await prisma.user.getValues("name", {
    id: 1,
  });

  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
