import { Prisma } from "@prisma/client";

export default Prisma.defineExtension((prisma) => {
  return prisma.$extends({
    name: "generateSlug",
    model: {
      $allModels: {},
    },
  });
});
