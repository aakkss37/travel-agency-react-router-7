import { Header } from 'components'
import React from 'react'

type Props = {}

const dashboard = (props: Props) => {
  return (
    <main className="dashboard wrapper">
      <Header
        title="Dashboard"
        description="Welcome to the admin dashboard. Here you can manage your application."
        ctaText="New Item"
        ctaUrl="/admin/dashboard/new"
      />
    </main>
  )
}

export default dashboard