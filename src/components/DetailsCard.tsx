import React, { Component } from 'react'

interface DatasProps {
    title: string
    image: string
    tagline: string
    rating: number
    release: string
    genre: string
    runtime: number
    language: string
    popularity: string
    companies: string
    budget: number
    revenue: number
    overview: string
}

export class DetailsCard extends Component<DatasProps> {
    render() {
        return (
            <div className="hero min-h-screen bg-base-200 mx-auto items-center" >
                <div className='w-full bg-cover bg-center bg-no-repeat' >
                    {/* <img src={this.props.image} className='opacity-40 w-screen' /> */}
                </div>
                <div className="hero-content flex-col lg:flex-row justify">
                    <div className="card card-side backdrop-blur-xl shadow-xl items-center">
                        <img src={this.props.image} className="w-1/4 h-1/4 shadow-2xl mx-10 my-10 " />
                        <div className='mx-14 my-14'>
                            <h1 className="text-5xl font-bold">{this.props.title}</h1>
                            <p className='pt-2 text-lg font-semibold'><span className='text-lg font-normal italic'>{this.props.tagline}</span></p> <br />
                            <p className='pt-2 text-lg font-semibold'>Ratings: <span className='text-lg font-normal'>{this.props.rating}</span></p>
                            <p className='pt-1 text-lg font-semibold'>Release: <span className='text-lg font-normal'>{this.props.release}</span></p>
                            <p className='pt-1 text-lg font-semibold'>Genre: <span className='text-lg font-normal'> {this.props.genre}</span>.</p>
                            <p className='pt-1 text-lg font-semibold'>Runtime: <span className='text-lg font-normal'>{this.props.runtime}</span></p>
                            <p className='pt-1 text-lg font-semibold'>Languange: <span className='text-lg font-normal'>{this.props.language}</span></p>
                            <p className='pt-1 text-lg font-semibold'>Popularity: <span className='text-lg font-normal'>{this.props.popularity}</span></p>
                            <p className='pt-1 text-lg font-semibold'>Production: <span className='text-lg font-normal'> {this.props.companies}</span>.</p>
                            <p className='pt-1 text-lg font-semibold'>Budget: <span className='text-lg font-normal'>{this.props.budget}</span></p>
                            <p className='pt-1 text-lg font-semibold'>Revenue: <span className='text-lg font-normal'>{this.props.revenue}</span></p><br />
                            <p className="pt-1 pb-10 text-lg font-semibold">Overview: <br /> <span className='text-lg font-normal'>{this.props.overview}</span></p>
                            <button className="btn btn-primary border-none bg-base-200 w-full hover:bg-white hover:text-black mb-5">
                                Wacth Now!
                            </button>
                            <button className="btn btn-primary border-none bg-base-200 w-full hover:bg-white hover:text-black"                                             >
                                Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsCard