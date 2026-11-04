const os = require('os')
// info of the current user
const user = os.userInfo()
console.log(user)
//this method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()}seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totaleMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);