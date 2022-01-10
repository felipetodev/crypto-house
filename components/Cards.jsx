import Image from 'ui/Image'
import Link from 'next/link'
import { mock } from 'data.js'
import { Button } from 'components/Button'
import { ArrowIcon } from 'components/ArrowIcon'

/* What a component name don't? lol */
export function Cards () {
  return (
    <div className='container mx-auto'>
      <h2 className='text-gray-800 text-2xl mt-4 mb-4'>Recomendados para ti</h2>
      <ul className='grid grid-cols-3 gap-4'>
        {mock &&
          mock.map((item) => (
            <li key={item.id} className='group'>
              <Link href={`/${item.id}`}>
                <a>
                  <h2 className='flex font-medium text-gray-800 mb-2 group-hover:text-blue-400'>
                    {item.name} <ArrowIcon direction='right' className='ml-3 text-inherit' />
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
              <div className='mb-4'>
                <Button onClick={() => alert('TODO 🙆‍♂️')}>Contactar</Button>
                <Button href='tel:987777777' className='ml-2 border-blue-500 hover:border-blue-600'>
                  Telefono
                </Button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}
