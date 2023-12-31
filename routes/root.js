// 'use strict'

// module.exports = async function (fastify, opts) {
//   fastify.get('/', async function (request, reply) {
//     return { root: true }
//   })
// }


"use strict";

const routes = async function (fastify, opts) {
    fastify.get("/", async function (request, reply) {
        return fastify.prisma.company_groups.findMany();
    });
};

export default routes;