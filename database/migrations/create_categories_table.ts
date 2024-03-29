import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'categories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('class_id').notNullable()
      table.integer('mod_id').nullable()
      table.string('name').notNullable()
      table.string('name_locale').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
