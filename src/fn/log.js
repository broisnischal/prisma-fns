"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
exports.default = client_1.Prisma.defineExtension(function (prisma) {
    return prisma.$extends({
        name: "log",
        client: {
            $log: function (s) { return console.log(s); },
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
