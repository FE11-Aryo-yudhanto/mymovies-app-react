import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={`footer items-center p-4 bg-gray-600 text-neutral-content shadow-xl`}>
      <div className="items-center grid grid-cols-2 w-full">
        <Link to='/' className={`btn btn-ghost normal-case font-bold text-2xl text-white`}>
          <p>Movies
            <span className='text-red-900 ml-2 text-3xl font-bold'>21</span>
          </p>
        </Link>
        <div className='w-full'>
          <p className='text-right mr-4'>Copyright Movie 21 © 2022 - All right reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer