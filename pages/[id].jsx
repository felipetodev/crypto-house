import { useState } from 'react'
import Image from 'ui/Image'
import { mock } from 'data.js'
import { useSession, signIn } from 'next-auth/react'
import { Button } from 'components/Button'
import { DetailDescription } from 'components/DetailDescription'
import { ArrowIcon } from 'components/ArrowIcon'

const HouseInformation = ({ data }) => {
  const [authMessage, setAuthMessage] = useState(false)
  const { status } = useSession()
  const isAuthenticated = status === 'authenticated'

  const fetchBuyOrder = async () => {
    if (!isAuthenticated) return setAuthMessage(true)
    const sendData = await fetch('/api/coinbase', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })

    const response = await sendData.json()
    // TODO: use an iframe
    window.open(response.hosted_url, 'self')
  }

  return (
    <main className='container mx-auto'>
      <div className='flex justify-between my-4'>
        <Button href='/'>
          <ArrowIcon direction='left' className='mr-3' /> Volver
        </Button>
        <div>
          {/* <Button href='/anterior' className='py-1 px-2 border-transparent bg-white'>
            &larr; Anterior <---- TODO: Pagination
          /Button> */}
          <Button href='#' className='ml-2 border-white hover:border-blue-100'>
            Siguiente <ArrowIcon direction='right' className='ml-3' />
          </Button>
        </div>
      </div>

      <section>
        <div className='relative h-96'>
          <Image
            className='rounded-xl object-cover'
            layout='fill'
            src={`/${data.id}.jpeg`}
            alt={data.id}
          />
          <Button className='bg-blue-50 text-slate-900 absolute bottom-8 left-16 hover:bg-blue-100'>
            📷 42 fotos
          </Button>
        </div>
      </section>

      <section className='flex mt-6'>
        <div className='left-side flex-auto w-96 mr-28'>
          <div className='flex justify-between'>
            <span className='text-2xl font-bold text-gray-600'>
              USD {data.local_price.amount}{' '}
              {/* <----- TODO: Add Intl number format */}
            </span>
            <div>
            <Button href='#' className='inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:text-sky-700 focus:ring-sky-600 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 mt-8'>
              Compartir
            </Button>
            <Button className='ml-3 inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 mt-8'>
              💙 Favorito
            </Button>
            </div>
          </div>

          <ul className='flex text-sm mb-1'>
            <li className='pr-1'>{'3 habs.'}</li>•
            <li className='pl-1 pr-1'>{'4 baños'}</li>•
            <li className='pl-1'>{data.description}</li>
          </ul>

          <h1 className='mt-6 text-2xl font-medium text-gray-700'>
            Casa en venta en Peñalolen, Region Metropolitana, Santiago.
          </h1>

          <DetailDescription />

          <div className='mb-8'>
            <Button>
              Pedir más datos al anunciante
            </Button>
          </div>

          <Button onClick={fetchBuyOrder}>
            Comprar ${data.local_price.amount}
          </Button>
          {authMessage && (
            <Button className='ml-2 bg-white text-slate-800 hover:bg-blue-100' onClick={() => signIn('google')}>
              Debes iniciar sesión para continuar
            </Button>
          )}
        </div>

        <aside className='right-side w-80'>
          <div className='border border-red-500 h-96'>
            TODO: Contacta al anunciante 🏠
          </div>
        </aside>

      </section>
    </main>
  )
}

export async function getStaticProps ({ params }) {
  const getSelectedHome = mock?.find((el) => el.id === params.id)
  return {
    props: {
      data: getSelectedHome
    }
  }
}

export async function getStaticPaths () {
  return {
    paths: mock.map((item) => ({
      params: {
        id: item.id
      }
    })),
    fallback: false
  }
}

export default HouseInformation
