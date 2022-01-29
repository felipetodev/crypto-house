import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from './Button'
import { useWeb3React } from '@web3-react/core'
import { connector } from 'config/web3'
import { App } from 'hooks/useMetamask'
// const contract = require('@truffle/contract')

export function AsideInfo ({ data }) {
  const { name, description, id, local_price: localPrice } = data || {}
  const { currency, amount } = localPrice || {}
  const [textArea, setTextArea] = useState(false)
  const { handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  const parseId = Number(id.replace('house', ''))

  const { activate, active, account } = useWeb3React()
  console.log({ account })

  const connect = useCallback(() => {
    activate(connector)
  }, [activate])

  const getContract = async () => {
    if (active) {
      await App.loadContracts()
      await App.createHouse(parseId, name, description, currency, amount)
    }
  }

  // Work in progress...

  return (
    <aside className='right-side lg:w-80 top-0 mt-1'>
      <div className='hidden lg:block h-max sticky top-10 bg-blue-300 p-4 rounded-lg'>
        <h3 className='text-white text-xl my-2 font-semibold'>Contacta con el anunciante</h3>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
          {/* register your input into the hook by invoking the 'register' function */}
          <input className='p-2 border border-blue-400' placeholder='Tu nombre' />
          <input className='p-2 my-4 border border-blue-400' placeholder='Tu email (obligatorio)' />
          <input className='p-2 mb-4 border border-blue-400' placeholder='Tu teléfono' />
          <select className='p-2 cursor-pointer leading-12 border border-blue-400' >
            <option>¿Cuál es el motivo de tu contacto?</option>
            <option value='Agendar una visita'>Agendar una visita</option>
            <option value='Solicitar dirección exacta'>Solicitar dirección exacta</option>
            <option value='Solicitar más información'>Solicitar más información</option>
            <option value='Otro'>Otro</option>
          </select>
          {textArea
            ? <textarea className='p-2 h-40 mt-4 border border-blue-400' placeholder='Comentario' />
            : <Button onClick={() => setTextArea(true)} className='w-fit py-1 px-0 mt-4 bg-transparent text-white hover:bg-blue-400'>+ Añadir un comentario</Button>}
          <Button type='submit' className='my-6'>Contactar</Button>
        </form>
        <div className='flex gap-2 p-4 absolute left-0 -bottom-20 w-full'>
          <Button onClick={connect} className='w-full px-3 focus:outline-none focus:ring-2 bg-sky-100 text-sky-600 hover:bg-sky-200 hover:text-sky-700 focus:ring-sky-600'>
            Comprar
          </Button>
          <Button onClick={getContract} className='w-full px-3 focus:outline-none focus:ring-2 bg-sky-100 text-sky-600 hover:bg-sky-200 hover:text-sky-700 focus:ring-sky-600'>
            Paso 2
          </Button>
        </div>
      </div>
    </aside>
  )
}
