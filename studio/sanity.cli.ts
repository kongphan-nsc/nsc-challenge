import {defineCliConfig} from 'sanity/cli'
import {SANITY_PROJECT_ID, SANITY_DATASET} from '../shared/config'

export default defineCliConfig({
  api: {
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
