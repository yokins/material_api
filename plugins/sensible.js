// 'use strict'

// const fp = require('fastify-plugin')

// /**
//  * This plugins adds some utilities to handle http errors
//  *
//  * @see https://github.com/fastify/fastify-sensible
//  */
// module.exports = fp(async function (fastify, opts) {
//   fastify.register(require('@fastify/sensible'), {
//     errorHandler: false
//   })
// })

"use strict";

import fp from "fastify-plugin";
import sensible from '@fastify/sensible'
// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

const plugin = fp(async function (fastify, opts) {
    fastify.register(sensible, {
        errorHandler: false,
    });
});

export default plugin;
