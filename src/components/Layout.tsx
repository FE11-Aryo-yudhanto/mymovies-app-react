import React, { FC } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  onChangeSearch?: (e: any) => void
  onSubmitSearch?: () => void
  onclickSearch?: () => void
}
const Layout: FC<LayoutProps> = ({ children, onChangeSearch, onSubmitSearch, onclickSearch }) => {
  return (
    <div className='w-screen h-screen bg-base-200 flex flex-col overflow-auto'>
      <Navbar onChangeSearch={onChangeSearch} onSubmitSearch={onSubmitSearch} onclickSearch={onclickSearch}/>
      <div className="h-full overflow-auto">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout