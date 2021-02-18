let handler = function (m) {
  // this.sendContact(m.chat, '553398091185', 'Nurutomo', m)
  this.sendContact(m.chat, '0', '553398091185', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
