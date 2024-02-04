import { Footer }   from '@/app/(marketing)/components/footer'
import { Navbar }   from '@/app/(marketing)/components/navbar'
import { NextPage } from 'next'
import React        from 'react'

interface Props {
  children: React.ReactNode
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className='h-full bg-slate-100'>
      <Navbar />
      <main className='pt-40 pb-20 bg-slate-100'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
