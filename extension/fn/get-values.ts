import { Prisma } from "@prisma/client";

export default Prisma.defineExtension((prisma) => {
  return prisma.$extends({
    model: {
      $allModels: {
        async getValues<T, K extends Prisma.Result<T, null, "findMany">>(
          this: T,
          field: keyof K[0],
          where: Prisma.Args<T, "findMany">["where"]
        ) {
          const context = Prisma.getExtensionContext(this);
          const result: K = await (context as any).findMany({
            where,
            select: { [field]: true },
          });

          return result.map((item) => item[field]);
        },
      },
    },
  });
});
