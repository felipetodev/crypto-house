import { NavUserOutlet } from 'components/NavUserOutlet'

const navigation = {
  example: {
    name: 'Buscar',
    path: '/search'
  },
  challenges: {
    name: 'Nosotros',
    path: '/about'
  },
  faqs: {
    name: 'FAQ',
    path: '/faq'
  }
}

export function Header () {
  return (
    <header className='flex place-content-center'>
      <div className='container py-4 flex flex-col gap-5 px-10 lg:flex-row place-content-between bg-gray-100 lg:rounded-lg lg:mx-2 lg:mt-4 items-center dark:bg-gray-900'>
        <a id='logo' href='/' className='relative font-bold text-gray-500 dark:text-gray-100'>
          House of Cryptos
        </a>

        <nav className='fixed bottom-0 z-50 flex justify-center w-full gap-6 p-2 bg-gray-100 sm:p-0 dark:bg-gray-900 sm:bg-transparent sm:static sm:w-auto'>
          {Object.values(navigation).map((tab) => (
            <a
              key={tab.name}
              href={tab.path}
              className='sm:hover:ring-2 ring-gray-900 dark:ring-yellow-300 w-1/4 sm:w-auto p-2 rounded-lg flex text-xs sm:text-base flex-col sm:flex-row items-center gap-1 hover:text-gray-900 transition dark:hover:text-yellow-300 text-gray-500 dark:text-gray-100'
            >
              {tab.name}
            </a>
          ))}
        </nav>

        <NavUserOutlet />
      </div>
    </header>
  )
}
