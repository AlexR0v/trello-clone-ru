import { OrgControl } from '@/app/(platform)/(dashboard)/organization/[organizationId]/_components/OrgControl'
import React, { FC }  from 'react'

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  )
}

export default Layout
