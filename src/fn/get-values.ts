import { Prisma } from "@prisma/client/extension";

export default Prisma.defineExtension((prisma) => {
	return prisma.$extends({
		name: "prisma-fns/getvalues",
		model: {
			$allModels: {
				async getValues<T, K extends Prisma.Result<T, null, "findMany">>(
					this: T,
					field: keyof K[0],
					where: Prisma.Args<T, "findMany">["where"],
				) {
					const context = Prisma.getExtensionContext(this);
					const result: K = await (context as any).findMany({
						where,
						select: { [field]: true },
					});

					// @ts-expect-error
					return result.map((item) => item[field]);
				},
			},
		},
	});
});
