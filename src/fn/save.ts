import { Prisma } from "@prisma/client";

export default Prisma.defineExtension((prisma) => {
	return prisma.$extends({
		name: "save",
		result: {
			$allModels: {
				save: {
					compute(data: any) {},
				},
			},
		},
	});
});
