import { Prisma } from "@prisma/client";

export default Prisma.defineExtension((prisma) => {
	return prisma.$extends({
		name: "prisma-fns/log",
		client: {
			$log: <T>(s: T) => console.log(s) as never,
			// async $totalQueries() {
			//   const index_prisma_client_queries_total = 0;
			//   const metricsCounters = await (
			//     await Prisma.getExtensionContext(this).$metrics.json()
			//   ).counters;

			//   return metricsCounters[index_prisma_client_queries_total].value;
			// },
		},
	});
});
