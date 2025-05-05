import { Header } from 'components'
import React from 'react'

type Props = {}

const AllUser = (props: Props) => {
  return (
    <main className="dashboard wrapper">
      <Header
        title="all-user"
        description="Welcome to the admin all-user. Here you can manage your application."
        ctaText="New Item"
        ctaUrl="/admin/all-user/new"
      />
    </main>
  )
}

export default AllUser