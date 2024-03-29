import { BaseModel, column } from '@adonisjs/lucid/orm'

export class ComponentModel extends BaseModel {
  static table = 'components'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare classId: number

  @column()
  declare categoryId: number

  @column()
  declare modId: number | null

  @column()
  declare icon: string

  @column()
  declare name: string

  @column()
  declare nameLocale: string

  @column()
  declare description: string

  @column()
  declare descriptionLocale: string
}
