
const vlcb = require('../vlcb.js')

var t = 'rubbings'
var tObj = vlcb[t]
console.log(`${t}: all: ${tObj.vlcnAll}`)
console.log(`${t}: byVLCN('7F'): ${tObj.byVLCN('7F')}`)
console.dir(tObj.byVLCN('7F'))

