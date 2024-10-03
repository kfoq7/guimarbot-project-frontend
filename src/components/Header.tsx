import { Link } from 'react-router-dom'

const links = [
  {
    to: '#',
    name: 'Home',
  },
  {
    to: '#courses',
    name: 'Cursos',
  },
  {
    to: '#foros',
    name: 'Foros',
  },
]

export const Header: React.FC = () => {
  return (
    <header className="fixed z-[99999] w-full overflow-visible py-6 backdrop-blur-sm">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-[auto_1fr] items-center justify-center gap-x-10 md:flex md:justify-normal">
        <div className="flex justify-start md:flex-grow md:basis-0">
          <a href="#" className="ml-6">
            Logo
          </a>
        </div>

        <nav className="col-span-full row-[2/3] grid grid-rows-[0fr] overflow-x-auto md:flex md:justify-center">
          <ul className="flex flex-col items-center gap-x-2 overflow-x-hidden overflow-y-hidden md:flex-row">
            {links.map(({ to, name }) => (
              <li
                key={name}
                className="flex w-full justify-center first:mt-5 md:block md:w-auto md:first:mt-0"
              >
                <a href={to}>{name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mr-4 flex items-center justify-end gap-4 md:flex-grow md:basis-0">
          <Link
            to="/login"
            className="border-gray-400-500 flex items-center justify-center rounded-md border bg-blue-500 px-4 py-2.5 text-lg leading-none text-white shadow-md transition-transform duration-300 hover:scale-105"
          >
            Aprende ahora
          </Link>
        </div>
      </div>
    </header>
  )
}
