import { Prisma } from "@prisma/client/extension";

// update only if the provided prev: id exists,

// biome-ignore lint/complexity/noBannedTypes: <explanation>
type Args = {};

export default Prisma.defineExtension((prisma) => {
	return prisma.$extends({
		name: "prisma-fns/update-if-not-id-exists",
		model: {
			$allModels: {
				async updateNotexists<T>(
					this: T,
					where: Prisma.Args<T, "findFirst">["where"],
				) {
					const context = Prisma.getExtensionContext(this);
					const result = await (context as any).findFirst({ where });

					const users = await (context as any).findMany({
						where: {
							id: {
								not: result.id,
							},
						},
					});

					return users;
				},
			},
		},
	});
});
