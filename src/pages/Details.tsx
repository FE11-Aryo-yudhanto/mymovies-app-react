import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import Loader from '../components/Loader'
import { withRouter } from "../utils/navigation";
import Button from '../components/Button';

type GenreType = {
    id?: number;
    name?: string;
};
type companiesType = {
    id?: number;
    name?: string;
};

interface DetailsDataType {
    id?: number
    title?: string
    poster_path?: string
    backdrop_path?: string
    tagline?: string
    vote_average?: number
    release_date?: string
    genres?: GenreType[]
    runtime?: number
    original_language?: string
    popularity?: string
    production_companies?: companiesType[]
    budget?: number
    revenue?: number
    overview?: string

}

interface Propstype {
    params?: any;
    navigate?: any
}

interface StateType {
    loading: boolean
    data: DetailsDataType
}

export class Details extends Component<Propstype, StateType> {
    constructor(props: Propstype) {
        super(props)
        this.state = {
            data: {},
            loading: true,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const { id_movie } = this.props.params
        console.log("cek params", id_movie)
        axios.get(`${id_movie}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
            .then((datas) => {
                console.log("data:", datas)
                const { data } = datas
                console.log("hasil:", data)
                this.setState({ data: data })
            }).catch((err) => {
                console.log("error", err)
            }).finally(() =>
                this.setState({ loading: false })
            )
    }
    backToHome() {
        this.props.navigate(`/`);
    }
    
    render() {
        return (
            <Layout>
                <div className=''>
                    {this.state.loading ? (
                        <Loader />
                    ) : (
                        <div className="hero min-h-screen bg-base-200 mx-auto items-center">
                            <div className='w-full bg-cover bg-center bg-no-repeat' >
                                <img src={`https://image.tmdb.org/t/p/w500${this.state.data.backdrop_path}`} className='opacity-40 w-screen' />
                            </div>
                            <div className="hero-content flex-col lg:flex-row justify">
                                <div className="card card-side backdrop-blur-xl shadow-xl items-center">
                                    <img src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`} className="w-1/4 h-1/4 shadow-2xl mx-10 my-10 " />
                                    <div className='mx-14 my-14'>
                                        <h1 className="text-5xl font-bold">{this.state.data.title}</h1>
                                        <p className='pt-2 text-lg font-semibold'><span className='text-lg font-normal italic'>{this.state.data.tagline}</span></p> <br />
                                        <p className='pt-2 text-lg font-semibold'>Ratings:{" "}
                                            <span className='text-lg font-normal'>
                                                {/* {this.state.data.vote_average.toFixed(1)} */}
                                                {this.state.data.vote_average}
                                            </span>
                                        </p>
                                        <p className='pt-1 text-lg font-semibold'>Release: <span className='text-lg font-normal'>{this.state.data.release_date}</span></p>
                                        <p className='pt-1 text-lg font-semibold'>Genre:{" "}
                                            <span className='text-lg font-normal'>
                                                {
                                                    this.state.data.genres?.map((genre) => {
                                                        return genre.name
                                                    }).join(", ")
                                                }
                                            </span>.
                                        </p>
                                        <p className='pt-1 text-lg font-semibold'>Runtime:{" "}
                                            <span className='text-lg font-normal'>
                                                {/* {Math.floor(this.state.data.runtime / 60) + ` Hours ` + Math.floor(this.state.data.runtime % 60) + ` Minutes.`} */}
                                                {this.state.data.runtime} s
                                            </span>
                                        </p>
                                        <p className='pt-1 text-lg font-semibold'>Languange: <span className='text-lg font-normal'>{this.state.data.original_language}</span></p>
                                        <p className='pt-1 text-lg font-semibold'>Popularity: <span className='text-lg font-normal'>{this.state.data.popularity}</span></p>
                                        <p className='pt-1 text-lg font-semibold'>Production: <span className='text-lg font-normal'>
                                            {
                                                this.state.data.production_companies?.map((companies) => {
                                                    return companies.name
                                                }).join(", ")
                                            }
                                        </span>.
                                        </p>
                                        <p className='pt-1 text-lg font-semibold'>Budget:{" "}
                                            <span className='text-lg font-normal'>
                                                {/* {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(this.state.data.budget)} */}
                                                {this.state.data.budget}
                                            </span>
                                        </p>
                                        <p className='pt-1 text-lg font-semibold'>Revenue:{" "}
                                            <span className='text-lg font-normal'>
                                                {/* {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(this.state.data.revenue)} */}
                                                {this.state.data.revenue}
                                            </span>
                                        </p><br />
                                        <p className="pt-1 pb-10 text-lg font-semibold">Overview: <br /> <span className='text-lg font-normal'>{this.state.data.overview}</span></p>
                                        <Button
                                            label='Watch Now!'
                                            className='btn btn-primary border-none bg-base-200 w-full hover:bg-white hover:text-black mb-5 transition hover:scale-105'
                                        />
                                        <Button
                                            label='Back To Home'
                                            className='btn btn-primary border-none bg-base-200 w-full hover:bg-white hover:text-black mb-5 transition hover:scale-105'
                                            onClick={() => this.backToHome()}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Layout>
        )
    }
}

export default withRouter(Details)