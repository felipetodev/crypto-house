import { Cards } from 'components/Cards'

export default function Home () {
  return (
    <main className='place-content-center container mx-auto'>
      <h2 className='text-gray-800 text-2xl mt-8'>
        Recomendados para ti
      </h2>
      <Cards />
    </main>
  )
}
