import { PrismaClient } from "@prisma/client";
import {
  exists,
  getValues,
  generateSlug,
  save,
  remember,
  log,
  logPerf,
  // pagination,
} from "./src";

const prisma = new PrismaClient()
  .$extends(getValues)
  .$extends(exists)
  .$extends(generateSlug)
  .$extends(save)
  .$extends(remember)
  .$extends(log)
  .$extends(logPerf);

async function main() {
  // const prisma = new PrismaClient().$extends(logPerf);

  const user = await prisma.user.findFirst();

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
