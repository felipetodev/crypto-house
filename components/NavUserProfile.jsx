import Image from 'ui/Image'
import { signOut } from 'next-auth/react'
import { ArrowIcon } from 'components/ArrowIcon'
import { LogOutIcon } from './icons'
import { useState } from 'react'

export function NavUserProfile ({ user }) {
  const [toggle, setToggle] = useState(false)
  const { name, image } = user ?? {}

  return (
    <div className='flex items-center relative'>
      <Image
        className='rounded-full object-cover'
        src={image}
        alt={name}
        width={36}
        height={36}
      />
      <span onClick={() => setToggle(!toggle)} className='flex text-white ml-2 text-sm font-semibold cursor-pointer'>
        {name || 'Unknown'} <ArrowIcon className='ml-2 !text-inherit' direction='bottom' />
      </span>
      {toggle && (
        <div onClick={() => signOut()} className='text-sm font-semibold flex items-center py-2 px-2 justify-center cursor-pointer bg-white rounded-lg border-2 border-black absolute top-11 right-0 hover:bg-sky-100'>
          <LogOutIcon /> Cerrar sesión
        </div>
      )}
    </div>
  )
}
