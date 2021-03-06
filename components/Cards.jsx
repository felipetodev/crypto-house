import Image from 'ui/Image'
import Link from 'next/link'
import { mock } from 'data.js'
import { Button } from 'components/Button'
import { ArrowIcon } from 'components/ArrowIcon'
import { HeartIcon } from './icons'

/* What a component name don't? lol */
export function Cards () {
  return (
    <div className='container mx-auto mt-6'>
      <ul className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {mock &&
          mock.map((item) => (
            <li key={item.id} className='group'>
              <Link href={`/${item.id}`}>
                <a>
                  <h2 className='flex font-medium text-gray-800 mb-2 group-hover:text-blue-400'>
                    {item.name} <ArrowIcon direction='right' className='ml-3' />
                  </h2>
                  <Image
                    className='rounded-xl object-cover'
                    src={`/${item.id}.jpeg`}
                    alt={item.id}
                    width={500}
                    height={250}
                  />
                  <div className='flex flex-col'>
                    <span className='text-xl font-bold text-gray-800 mb-1'>
                      USD {item.local_price.amount}{' '}
                      {/* <----- TODO: Add Intl number format */}
                    </span>
                    <span className='text-sm mb-1'>
                      <span className='font-bold text-gray-800'>Casa</span> en
                      Santiago, Región Metropolitana
                    </span>
                    <ul className='flex text-sm mb-1'>
                      <li className='pr-1'>{'3 habs.'}</li>•
                      <li className='pl-1 pr-1'>{'4 baños'}</li>•
                      <li className='pl-1'>{item.description}</li>
                    </ul>
                    <span className='text-xs font-bold text-gray-400 mb-2'>
                      Nuevo {/* TODO: useTimeAgo if published > one week */}
                    </span>
                  </div>
                </a>
              </Link>
              <div className='flex mb-4'>
                <Button onClick={() => alert('TODO 🙆‍♂️')}>Contactar</Button>
                <Button href='tel:987777777' className='ml-2 border-blue-500 hover:border-blue-600'>
                  Telefono
                </Button>

                <Button className='ml-auto bg-sky-100 text-sky-700 hover:bg-red-100 hover:text-red-600 px-2.5 rounded-full'>
                  <HeartIcon />
                </Button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}
