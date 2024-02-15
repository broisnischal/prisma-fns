import { Prisma } from "@prisma/client/extension";

// update only if the provided prev: id exists,

// biome-ignore lint/complexity/noBannedTypes: <explanation>
type Args = {};

export default Prisma.defineExtension((prisma) => {
	return prisma.$extends({
		name: "prisma-fns/update-if-not-id-exists",
		model: {
			$allModels: {
				async updateIfNotIdExists<T, A>(
					this: T,
					args: Prisma.Exact<A, Prisma.Args<T, "findFirst">>,
				) {
					const context = Prisma.getExtensionContext(this);

					const result = await (context as any).findFirst(args);

					const user = await (context as any).findMany({
						where: {
							id: {
								not: result?.id,
							},
						},
					});

					return user;
				},
			},
		},
	});
});
