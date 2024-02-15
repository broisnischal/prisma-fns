import { Prisma } from "@prisma/client";

export default Prisma.defineExtension({
	name: "Undefine Field",
	result: {
		$allModels: {
			undefineField: {
				needs: {},
				compute() {
					return undefined;
				},
			},
		},
	},
});
