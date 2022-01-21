import { mock } from 'data.js'
import { Button } from 'components/Button'
import { DetailDescription } from 'components/DetailDescription'
import { UspsFeatures } from 'components/UspsFeatures'
import { HeartIcon, ShareIcon, LocationIcon } from 'components/icons'
import { GoogleMaps } from 'components/GoogleMaps'
import { AsideInfo } from 'components/AsideInfo'
import { Cards } from 'components/Cards'
import { Pagination } from 'components/Pagination'
import { ProductGallery } from 'components/ProductGallery'

const HouseInformation = ({ data }) => {
  return (
    <main className='container mx-auto'>
      <Pagination />
      <ProductGallery id={data.id} />
      <section className='flex mt-6'>
        <div className='left-side flex-auto lg:w-96 lg:mr-28'>
          <div className='flex justify-between'>
            <span className='text-2xl font-bold text-gray-600'>
              USD {data.local_price.amount}{' '}
              {/* <----- TODO: Add Intl number format */}
            </span>
            <div>
            <Button href='#' className='inline-flex items-center h-9 rounded-full text-sm whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 !text-sky-600 hover:text-sky-700 focus:ring-sky-600 mt-8'>
              <ShareIcon className='mr-2 text-sky-600' /> Compartir
            </Button>
            <Button className='ml-3 inline-flex items-center h-9 rounded-full text-sm whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8'>
              <HeartIcon className='mr-2 text-sky-600' /> Favorito
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

          <UspsFeatures />
          {/* Use DB address house location */}
          <GoogleMaps center={{ lat: -33.415187, lng: -70.594426 }} />

          <div className='border-b'>
            <div className='max-w-xl mx-auto mb-10'>
              <Button className='mt-8 flex justify-center w-full'>
                <LocationIcon /> Preguntar la dirección exacta
              </Button>
            </div>
          </div>
        </div>

        <AsideInfo />

      </section>

      <div>
        <div className='flex items-center border-b pb-8'>
          <div className='rounded-md mt-8'>
            <h2 className='font-semibold mb-4'>¿Hay algún error en el anuncio?</h2>
            <span className='text-sm'>Explícanos qué has detectado para poder corregirlo.</span>
            <Button className='flex mt-4 bg-transparent text-blue-500 border-blue-500'>
              Reportar error
            </Button>
          </div>
        </div>

        <section>
          <h2 className='mt-6 text-2xl font-medium text-gray-700'>
            Personas que buscan algo similar también han visto...
          </h2>
          <Cards />
        </section>
      </div>
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
