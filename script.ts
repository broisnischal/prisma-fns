import { PrismaClient } from "@prisma/client";
import {
  exists,
  getValues,
  generateSlug,
  save,
  remember,
  log,
  logPerf,
  updateIfNotExists,
  undefineField,
  // pagination,
} from "./src";

const prisma = new PrismaClient().$extends(undefineField);
// .$extends(getValues)
// .$extends(exists)
// .$extends(generateSlug)
// .$extends(save)
// .$extends(remember)
// .$extends(log)
// .$extends(logPerf);

async function main() {
  // const prisma = new PrismaClient().$extends(logPerf);

  const user = await prisma.user.findFirst();

  const data = await prisma.user.findFirst();

  const val = data?.undefineField();

  console.log(val);
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
