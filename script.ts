import { PrismaClient } from "@prisma/client";
import { exists, getValues } from "./extension";

const prisma = new PrismaClient().$extends(getValues).$extends(exists);

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Alice",
  //     email: "alice@prisma.io",
  //   },
  // });

  // const user = await prisma.user.getValues("email", {
  //   email: {
  //     contains: "@",
  //   },
  // });

  const user = await prisma.user.exists({
    id: 2,
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
