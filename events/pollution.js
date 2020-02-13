const debug = require('debug')('linto:skill:v2:linto-skill:pollution:events:pollution')

module.exports = async function (msg) {
  let result = await this.controller[this.config.api](msg)
  return { say: `${result}` }
}