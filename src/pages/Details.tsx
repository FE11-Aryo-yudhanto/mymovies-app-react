import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { enUS } from 'date-fns/locale';
import { format } from 'date-fns';
import ISO6391 from 'iso-639-1'
import axios from 'axios'

import { DetailsdatasType } from 'utils/types/movie'
import { useTitle } from 'utils/hooks/customHooks'
import { withRouter } from "utils/navigation";
import Button from 'components/Button';
import Layout from 'components/Layout'
import Loader from 'components/Loader'


const Details = () => {
    const [datas, setDatas] = useState<DetailsdatasType>({})
    const [loading, setLoading] = useState<boolean>(true)
    const { id_movie } = useParams()
    const navigate = useNavigate()
    useTitle(`${datas.title} - Cinephile`)


    useEffect(() => {
        fetchdatas()
    }, [])

    function fetchdatas() {
        axios.get(`${id_movie}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
            .then((datas) => {
                const { data } = datas
                setDatas(data)
            }).catch((err) => {
            }).finally(() =>
                setLoading(false)
            )
    }
    function backToHome() {
        navigate(`/`);
    }

    function formatDate(dateString: string) {
        if (!dateString) return '';
        const formattedDate = format(new Date(dateString), 'MMMM d, yyyy', {
            locale: enUS, 
        });
        return formattedDate;
      }

    return (
        <Layout>
            <div className=''>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="hero min-h-screen bg-base-200 dark:bg-white dark:text-black mx-auto items-center">
                        <div className='w-full bg-cover bg-center bg-no-repeat' >
                            <img src={`https://image.tmdb.org/t/p/w500${datas.backdrop_path}`} className='opacity-40 w-screen' />
                        </div>
                        <div className="hero-content flex-col lg:flex-row justify">
                            <div className="card card-side backdrop-blur-xl shadow-xl items-center">
                                <img src={`https://image.tmdb.org/t/p/w500${datas.poster_path}`} className="w-1/4 h-1/4 shadow-2xl mx-10 my-10 " />
                                <div className='mx-14 my-14'>
                                    <h1 className="text-5xl font-bold">{datas.title}</h1>
                                    <p className='pt-2 text-lg font-semibold'><span className='text-lg font-normal italic'>{datas.tagline}</span></p> <br />
                                    <p className='pt-2 text-lg font-semibold'>Ratings:{" "}
                                        <span className='text-lg font-normal'>
                                            {datas.vote_average?.toFixed(1)}
                                        </span>
                                    </p>
                                    <p className='pt-1 text-lg font-semibold'>Release: <span className='text-lg font-normal'>{datas.release_date? (formatDate(datas.release_date)) : ("")}</span></p>
                                    <p className='pt-1 text-lg font-semibold'>Genre:{" "}
                                        <span className='text-lg font-normal'>
                                            {
                                                datas.genres?.map((genre) => {
                                                    return genre.name
                                                }).join(", ")
                                            }
                                        </span>.
                                    </p>
                                    <p className='pt-1 text-lg font-semibold'>Runtime:{" "}
                                        <span className='text-lg font-normal'>
                                            {datas.runtime !== undefined ? (Math.floor(datas.runtime / 60) + ` Hours ` + Math.floor(datas.runtime % 60) + ` Minutes.`) : ("N/A")}
                                        </span>
                                    </p>
                                    <p className='pt-1 text-lg font-semibold'>Languange: <span className='text-lg font-normal'>{datas.original_language? (ISO6391.getName(datas.original_language)) : ("")}</span></p>
                                    <p className='pt-1 text-lg font-semibold'>Popularity: <span className='text-lg font-normal'>{datas.popularity}</span></p>
                                    <p className='pt-1 text-lg font-semibold'>Production: <span className='text-lg font-normal'>
                                        {
                                            datas.production_companies?.map((companies) => {
                                                return companies.name
                                            }).join(", ")
                                        }
                                    </span>.
                                    </p>
                                    <p className='pt-1 text-lg font-semibold'>Budget:{" "}
                                        <span className='text-lg font-normal'>
                                            {datas.budget? (new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(datas.budget)) : (0)}
                                        </span>
                                    </p>
                                    <p className='pt-1 text-lg font-semibold'>Revenue:{" "}
                                        <span className='text-lg font-normal'>
                                            {datas.revenue? (new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(datas.revenue)) : (0)}
                                        </span>
                                    </p><br />
                                    <p className="pt-1 pb-10 text-lg font-semibold">Overview: <br /> <span className='text-lg font-normal'>{datas.overview}</span></p>
                                    <Button
                                        label='Watch Now!'
                                        className='btn btn-primary border-none bg-base-200 w-full hover:bg-white hover:text-black mb-5 transition hover:scale-105'
                                    />
                                    <Button
                                        label='Back To Home'
                                        className='btn btn-primary border-none bg-base-200 w-full hover:bg-white hover:text-black mb-5 transition hover:scale-105'
                                        onClick={() => backToHome()}
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

export default withRouter(Details)