import Sidebar       from '@/app/(platform)/(dashboard)/_components/Sidebar'
import React, { FC } from 'react'

interface Props {
  children: React.ReactNode
}

const OrganizationLayout: FC<Props> = ({ children }) => {
  return (
    <main className='pt-20 md:pt-24 h-full mx-auto'>
      <div className='flex gap-x-7 h-full'>
        <div className='w-64 shrink-0 shadow-md hidden md:block'>
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  )
}

export default OrganizationLayout
