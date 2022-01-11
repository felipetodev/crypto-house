import { HouseIcon, ConditionIcon, AntiquityIcon, OrientationIcon } from 'components/icons'

export function UspsFeatures () {
  return (
    <section className='border-y'>
      <div>
        <h2 className='mt-6 text-2xl font-medium text-gray-700'>
          Características
        </h2>
        <div className='mt-10 mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-10'>
          <div className='flex items-center'>
            <HouseIcon />
            <div className='ml-4 flex flex-col'>
              <span>Tipo de inmueble</span>
              <span className='font-medium'>Piso</span>
            </div>
          </div>
          <div className='flex items-center'>
            <ConditionIcon />
            <div className='ml-4 flex flex-col'>
              <span>Estado</span>
              <span className='font-medium'>Casi nuevo</span>
            </div>
          </div>
          <div className='flex items-center'>
            <AntiquityIcon />
            <div className='ml-4 flex flex-col'>
              <span>Antigüedad</span>
              <span className='font-medium'>10 a 30 años</span>
            </div>
          </div>
          <div className='flex items-center'>
            <OrientationIcon />
            <div className='ml-4 flex flex-col'>
              <span>Orientación</span>
              <span className='font-medium'>Poniente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
