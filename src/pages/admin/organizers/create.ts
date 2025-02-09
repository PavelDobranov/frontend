import { securedPropsWithTranslation } from 'middleware/auth/securedProps'
import CreatePage from 'components/organizers/CreatePage'

export const getServerSideProps = securedPropsWithTranslation([
  'common',
  'auth',
  'validation',
  'organizer',
  'admin',
])

export default CreatePage
