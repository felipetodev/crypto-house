import Image from 'ui/Image'
import { Button } from './Button'
import { CameraIcon } from './icons'

export function ProductGallery ({ id }) {
  return (
    <section>
        <div className='relative h-96'>
          <Image
            priority
            className='lg:rounded-xl object-cover'
            layout='fill'
            src={`/${id}.jpeg`}
            alt={id}
          />
          <Button className='flex bg-blue-50 text-slate-900 absolute bottom-8 left-16 hover:bg-blue-100'>
            <CameraIcon /> 42 Fotos
          </Button>
        </div>
      </section>
  )
}
