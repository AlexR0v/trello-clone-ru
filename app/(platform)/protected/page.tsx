import { UserButton } from '@clerk/nextjs'
import { NextPage }   from 'next'

interface Props {
}

const Page: NextPage<Props> = () => {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default Page
