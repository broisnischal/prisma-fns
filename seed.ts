import { PrismaClient } from "@prisma/client/extension";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();

  const data = Array.from({ length: 10 }).map(() => {
    return {
      name: faker.name.fullName(),
      email: faker.internet.email(),
    };
  });

  await prisma.$transaction(
    data.map((datum) => prisma.user.create({ data: datum }))
  );
}

main()
  .then(async () => {
    console.log("Seeded successfully 🍀");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
