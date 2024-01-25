// import { Prisma } from "@prisma/client";

// export default Prisma.defineExtension((prisma) => {
//   return prisma.$extends({
//     name: "hidepwd",
//     query: {
//       user: {
//         async $allOperations({ model, query, args, operation }) {
//           if (
//             operation === "findMany" ||
//             operation === "findFirst" ||
//             operation === "findFirstOrThrow" ||
//             operation === "findUnique" ||
//             operation === "findUniqueOrThrow"
//           ) {
//             if (model === "User") {
//               const user = await query(args);
//             }
//           }
//         },
//       },
//     },
//   });
// });
