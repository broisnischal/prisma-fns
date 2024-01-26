import { Prisma } from "@prisma/client";

export default Prisma.defineExtension((prisma) => {
	return prisma.$extends({
		name: "log",
		client: {
			$log: (s: string) => console.log(s),
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
