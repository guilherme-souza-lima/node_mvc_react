const fs = require('fs')
const toml = require('toml-js')

const env = toml.parse(fs.readFileSync('tomlFile.toml', 'utf-8'));

module.exports = env
