"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
exports.default = client_1.Prisma.defineExtension(function (prisma) {
    return prisma.$extends({
        name: "generateSlug",
        result: {
            user: {
                slug: {
                    needs: { name: true },
                    compute: function (data) {
                        if (!data.name) {
                            return;
                        }
                        return data.name
                            .toLowerCase()
                            .replace(/[^a-z0-9]/g, "-")
                            .replace(/-+/g, "-")
                            .replace(/^-/, "")
                            .replace(/-$/, "");
                    },
                },
            },
        },
    });
});
// const prisma = new PrismaClient().$extends({
//   query: {
//     user: {
//       // Get the input `args` and a callback to `query`
//       async findFirst({ args, query, operation }) {
//         const [result] = await prisma.$transaction([query(args)]) // wrap the query in a batch transaction, and destructure the result to return an array
//         return result // return the first result found in the array
//       },
//     },
//   },
// })
