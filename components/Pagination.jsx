import { ArrowIcon } from 'components/ArrowIcon'
import { Button } from './Button'

export function Pagination () {
  return (
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
  )
}
