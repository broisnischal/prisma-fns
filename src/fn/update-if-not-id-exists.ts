import { Prisma } from "@prisma/client";

// update only if the provided prev: id exists,

export default Prisma.defineExtension((prisma) => {
	return prisma.$extends({
		name: "prisma-fns/update-if-not-id-exists",
		model: {
			$allModels: {
				async updateIfNotIdExists(field: string, where: Prisma.UserWhereInput) {
					const context = Prisma.getExtensionContext(this);
					const user = await (context as any).findMany({
						where: {
							id: where.id,
						},
					});
				},
			},
		},
	});
});
