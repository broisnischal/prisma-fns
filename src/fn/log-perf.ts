import util from "node:util";
import { Prisma } from "@prisma/client";

export default Prisma.defineExtension((prisma) => {
	return prisma.$extends({
		name: "logPerf",
		query: {
			async $allOperations({ model, operation, args, query }) {
				const start = performance.now();
				const result = await query(args);
				const end = performance.now();
				const time = end - start;
				console.log(
					util.inspect(
						{ model, operation, args, time },
						{ showHidden: false, depth: null, colors: true },
					),
				);
				return result;
			},
		},
	});
});
