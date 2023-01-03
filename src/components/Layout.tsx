import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps{
    children: React.ReactNode
}
export class Layout extends Component<LayoutProps> {
  render() {
    return (
      <div className='w-screen h-screen bg-base-200 flex flex-col overflow-auto'>
        <Navbar />
        <div className="h-full overflow-auto">{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

export default Layout