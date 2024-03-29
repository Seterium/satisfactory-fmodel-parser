import type { CommandOptions } from '@adonisjs/core/types/ace'

import { BaseCommand, flags } from '@adonisjs/core/ace'

import { ClassIdModel } from '#models'

import {
  CategoriesParser,
  ComponentsParser,
  ManufacturersParser,
  RecipesParser,
  GeneratorsParser,
} from '#services'

import chalk from 'chalk'
import consola from 'consola'

export default class All extends BaseCommand {
  static commandName = 'fmp:all'

  static description = `Парсинг данных ${chalk.bold.cyanBright('всех')} игровых объектов`

  static options: CommandOptions = {
    startApp: true,
  }

  @flags.boolean()
  declare resetRegistry: boolean | undefined

  async run() {
    if (this.resetRegistry) {
      await ClassIdModel.truncate()

      consola.success(`Таблица ${chalk.bold.cyanBright('classes_ids')} очищена`)
    }

    await (new CategoriesParser()).parseFiles()
    await (new ComponentsParser()).parseFiles()
    await (new ManufacturersParser()).parseFiles()
    await (new RecipesParser()).parseFiles()
    await (new GeneratorsParser()).parseFiles()
  }
}
