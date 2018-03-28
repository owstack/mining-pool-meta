const { readdirSync, statSync } = require('fs')
const { join, resolve } = require('path')

const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory());

const x = {};

dirs(resolve(__dirname, './blockchain/')).forEach((currency) => {
    x[currency] = require(`./blockchain/${currency}/pools.json`);
});

module.exports = x;
