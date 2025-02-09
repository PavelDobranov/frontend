import { useTranslation } from 'next-i18next'

import { Container } from '@mui/material'

import CreateForm from './grid/CreateForm'
import AdminLayout from 'components/admin/navigation/AdminLayout'
import AdminContainer from 'components/admin/navigation/AdminContainer'

export default function CreatePage() {
  const { t } = useTranslation('organizer')

  return (
    <AdminLayout>
      <AdminContainer title={t('admin.create.heading')}>
        <Container maxWidth="md" sx={{ py: 5 }}>
          <CreateForm />
        </Container>
      </AdminContainer>
    </AdminLayout>
  )
}
