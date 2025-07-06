import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {SANITY_PROJECT_ID, SANITY_DATASET} from '../shared/config'

export default defineConfig({
  name: 'default',
  title: 'NCS Challenge',

  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
