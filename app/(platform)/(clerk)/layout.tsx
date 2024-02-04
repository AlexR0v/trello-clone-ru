import { NextPage } from 'next'
import React        from 'react'

interface Props {
  children: React.ReactNode
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className='h-full flex items-center justify-center'>
      {children}
    </div>
  )
}

export default Layout
