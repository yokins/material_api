"use strict";

import fp from "fastify-plugin";
import { PrismaClient } from "@prisma/client";

const plugin = fp(async function (fastify, opts) {
    const prisma = new PrismaClient();

    await prisma.$connect();
    console.log("============================> 数据库已连接")

    fastify.decorate("prisma", prisma);

    fastify.addHook("onClose", async (server) => {
        console.log("============================> 数据库即将关闭");
        await fastify.prisma.$disconnect();
    });
});

export default plugin;
