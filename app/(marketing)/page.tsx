import { Button } from '@/components/ui/button'
import { cn }     from '@/lib/utils'
import { Medal }  from 'lucide-react'
import localFont  from 'next/font/local'
import Link       from 'next/link'

const font = localFont({
  src: '../../public/fonts/font.woff2',
})

const MarketingPage = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className={cn('flex items-center justify-center flex-col', font.className)}>
        <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
          <Medal className='h-6 w-6 mr-2' />
          Менеджер задач №1
        </div>
        <h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>
          Taskify - помогает вам
        </h1>
        <div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-sm pb-4 w-fit'>
          двигаться к цели
        </div>
      </div>
      <div className='text-sm md:text-xl text-neutral-400 mt-10 max-w-xs md:max-w-3xl text-center mx-auto'>
        Управляй проектами, ставь цели, делай задачи, самостоятельно или в команде, из дома или из офиса, достигай новых вершин.
      </div>
      <Button
        className='mt-10'
        asChild
      >
        <Link href='/sign-up'>Попробовать бесплатно</Link>
      </Button>
    </div>
  )
}

export default MarketingPage
