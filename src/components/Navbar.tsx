import { Link } from 'react-router-dom'
import { FC } from 'react'
import { useContext } from 'react'

import { ThemeContext } from 'utils/context'

interface NavbarProps {
    onSubmitSearch?: () => void
    onclickSearch?: () => void
    onChangeSearch?: (e: any) => void
}

const Navbar: FC<NavbarProps> = ({ onSubmitSearch, onChangeSearch, onclickSearch }) => {
    const { theme, setTheme } = useContext(ThemeContext);

    function handleTheme() {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }
    return (
        <div className="navbar bg-gray-600 shadow-xl sticky top-0 z-50 dark:bg-[#f5f5f5] dark:text-black">
            <div className="flex flex-1">
                <img src="" alt="" />
                <Link to="/" className="btn btn-ghost normal-case font-bold text-2xl text-white hover:text-white dark:text-black">
                    Movies<span className='text-red-900 ml-2 text-3xl font-bold'>21</span>
                </Link>
            </div>
            <div className="flex flex-1 justify-center">
                <div className="form-control mr-5 w-full hidden md:flex ">
                    <input onSubmit={onSubmitSearch} type="text" placeholder="Search" className="input bg-base-200 text-white dark:bg-white dark:text-black shadow-xl" onChange={onChangeSearch} />
                    {/* <button className="btn btn-square border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button> */}

                </div>
            </div>
            <div className='flex flex-1 justify-end'>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li ><Link to="/" className=' hover:text-[#f5f5f5] dark:hover:text-[#252526]'>Home</Link></li>
                        <li ><Link to="/favorites" className=' hover:text-[#f5f5f5] dark:hover:text-[#252526]'>Favorite</Link></li>
                    </ul>
                </div>
                <label className="swap swap-rotate mr-5">
                    <input type="checkbox" onClick={() => handleTheme()}/>
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                </label>
                <div className="dropdown dropdown-end mr-10 ">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow-xl menu menu-compact dropdown-content bg-base-200 dark:bg-[#f5f5f5] rounded-box w-52">
                        <li className="text-white hover:bg-white hover:text-black dark:text-black dark:hover:bg-base-200 dark:hover:text-white">
                            <p >Profile
                                <span className="ml-14 badge bg-base-200 text-white dark:bg-white dark:text-black ">New</span></p>
                        </li>
                        <li className="text-white hover:bg-white hover:text-black dark:text-black dark:hover:bg-base-200 dark:hover:text-white"><p >Dark Mode:</p> </li>
                        <li className="text-white hover:bg-white hover:text-black dark:text-black dark:hover:bg-base-200 dark:hover:text-white"><p >Settings</p> </li>
                        <li className="text-white hover:bg-white hover:text-black dark:text-black dark:hover:bg-base-200 dark:hover:text-white"><p >Logout</p> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar