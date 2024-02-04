import { ruRU }          from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'
import { NextPage }      from 'next'
import React             from 'react'

interface Props {
  children: React.ReactNode
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <ClerkProvider localization={ruRU}>
      {children}
    </ClerkProvider>
  )
}

export default Layout
