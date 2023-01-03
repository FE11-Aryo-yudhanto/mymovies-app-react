import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar bg-gray-600">
                <a className={`btn btn-ghost normal-case font-bold text-2xl text-white`}>
                    Movies
                <span className='text-red-900 ml-2 text-3xl font-bold'>21</span> </a>
            </div>
        )
    }
}

export default Navbar