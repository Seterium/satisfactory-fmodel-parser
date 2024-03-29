import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'recipes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('class_id').notNullable()
      table.integer('mod_id').nullable()
      table.string('name').notNullable()
      table.string('name_locale').notNullable()
      table.boolean('is_alt').notNullable()
      table.integer('manufacturer_class_id').notNullable()
      table.float('manufacturing_duration').notNullable()
      table.float('energy_consumption_constant').nullable()
      table.float('energy_consumption_factor').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
