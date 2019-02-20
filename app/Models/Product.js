'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    static get table() {
        return 'products'
    }
    static get primaryKey() {
        return 'id'
    }
    order () {
        return this.hasMany('App/Models/Order')
    }

    async products() {
        return await Database.select("*").from("products");
    }
}

module.exports = Product