import CreateCampaignPageGrid from 'components/campaigns/grid/CreatePage'
import { securedPropsWithTranslation } from 'middleware/auth/securedProps'

export const getServerSideProps = securedPropsWithTranslation([
  'common',
  'auth',
  'validation',
  'campaigns',
])

export default CreateCampaignPageGrid
