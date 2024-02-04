import Navbar       from '@/app/(platform)/(dashboard)/_components/Navbar'
import { NextPage } from 'next'
import React        from 'react'

interface Props {
  children: React.ReactNode
}

const DashboardLayout: NextPage<Props> = ({ children }) => {
  return (
    <div className='h-full'>
      <Navbar />
      {children}
    </div>
  )
}

export default DashboardLayout
