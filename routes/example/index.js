// 'use strict'

// module.exports = async function (fastify, opts) {
//   fastify.get('/', async function (request, reply) {
//     return 'this is an example'
//   })
// }

"use strict";

const routes = async function (fastify, opts) {
    fastify.get("/", async function (request, reply) {
        return "this is an example";
    });
};

export default routes;
