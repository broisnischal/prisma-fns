import { Prisma } from "@prisma/client";

type CacheStrategy = {
	swr: number;
	ttl: number;
};

export default Prisma.defineExtension((prisma) => {
	return prisma.$extends({
		name: "cacheStrategy",
		model: {
			$allModels: {
				async findMany<T, K>(
					this: T,
					args: Prisma.Exact<K, Prisma.Args<T, "findMany">> & CacheStrategy,
				): Promise<Prisma.Result<T, K, "findMany">> {
					const context = await Prisma.getExtensionContext(this);

					const result = await (context as any).findMany(args, {
						cacheStrategy: {
							ttl: args.ttl,
							swr: args.swr,
						},
					});

					return result;
				},
			},
		},
	});
});
