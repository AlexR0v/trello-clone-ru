import { db }       from '@/lib/db'
import { NextPage } from 'next'

interface Props {
}

const Page: NextPage<Props> = () => {
  
  const create = async(formData: FormData) => {
    'use server'
    const title = formData.get('title') as string
    await db.board.create({ data: { title } })
    console.log(title)
  }
  
  return (
    <div className='w-full h-full p-2'>
      <form action={create}>
        <input
          id='title'
          name='title'
          required
          className='border-black border rounded-md p-2 w-1/4'
        />
      </form>
    </div>
  )
}

export default Page
