"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
exports.default = client_1.Prisma.defineExtension(function (prisma) {
    return prisma.$extends({
        name: "save",
        result: {
            $allModels: {
                save: {
                    compute: function (data) { },
                },
            },
        },
    });
});
