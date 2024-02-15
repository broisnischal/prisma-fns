import { Prisma } from "@prisma/client/extension";

export default Prisma.defineExtension((prisma) => {
	return prisma.$extends({
		name: "exists",
		model: {
			$allModels: {
				async exists<T>(this: T, where: Prisma.Args<T, "findFirst">["where"]) {
					const context = Prisma.getExtensionContext(this);

					const result = await (context as any).findFirst({
						where,
					});
					return result !== null;
				},
			},
		},
	});
});
