export const DUMP_FILE_NAME = 'dump'

export const FACTORY_GAME_CONTENTS = 'Content/FactoryGame'

export const CATEGORIES_PATTERN = 'Resource/**/{Cat,IC}_*.json'

// export const COMPONENTS_ALL_PATTERN = '**/{Parts,RawResources,Equipment}/**/{Desc,BP}_*.json'

export const COMPONENTS_ALL_PATTERN = '/**/*.json'

export const COMPONENTS_DESCS_PATTERN = 'Resource/**/Desc_*.json'

export const BUILDABLE_MAIN_PATTERN_BASE = '{Buildable,Buildables}/**'

export const BUILDABLE_DESC_PATTERN = `${BUILDABLE_MAIN_PATTERN_BASE}/Desc_*.json`

export const BUILDABLE_RECIPE_PATTERN = '/**/Recipe_*.json'

export const GENERATORS_SUBCATEGORIES_NAMES = [
  'SC_Generators_C',

  // Refined Power
  'BSC_RP_Reactors_C',
]

export const MANUFACTURERS_CATEGORIES_NAMES = [
  'BC_Production_C',
]

export const MANUFACTURERS_SUBCATEGORIES_NAMES = [
  'SC_Manufacturers_C',
  'SC_Smelters_C',
]

export const RECIPES_PATTERN = 'Recipes/**/Recipe_*.json'
