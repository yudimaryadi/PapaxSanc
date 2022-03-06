const bcrypt = require('bcryptjs')

function hashingPassword(password){
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)
    return hash
}

function comparePassword(input, passwordDb){
    return bcrypt.compareSync(input, passwordDb)
}

module.exports = {
    hashingPassword,
    comparePassword
}