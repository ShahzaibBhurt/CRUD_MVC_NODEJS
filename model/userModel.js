const db = require('../config/config')

module.exports = class Users{
    constructor(name, cast, number){
        this.name = name;
        this.cast = cast;
        this.number = number;
    }
    static fatchUsers(){
        return db.execute('select * from users')
    }
    static insertUsers(name, cast, number){
        return db.execute('insert into users(name, cast, number) values(?,?,?)', [name, cast, number])
    }
    static updateUser(id, name, cast, number){
        return db.execute('update users set name = ?, cast=?, number=? where id=?', [name, cast, number, id])
    }
    static deleteUser(id){
        return db.execute('delete from users where id=?', [id])
    }
}