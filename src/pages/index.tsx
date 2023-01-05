import React, { Component } from 'react'
import axios from 'axios'

import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Layout from '../components/Layout'
import Loader from '../components/Loader'
import { DatasType } from '../utils/types/movie'

interface Propstype { }

interface StateType {
  loading: boolean
  datas: DatasType[]
  page: number
  totalPage: number
}

export default class App extends Component<Propstype, StateType> {
  constructor(props: Propstype) {
    super(props)
    this.state = {
      datas: [],
      loading: true,
      page: 1,
      totalPage: 1
    }
  }

  fetchData(page: number) {
    axios.get(`now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`)
      .then((data) => {
        const { results, total_pages } = data.data
        this.setState({ datas: results, totalPage: total_pages })
      }).catch((err) => {
      }).finally(() =>
        this.setState({ loading: false })
      )
  }

  nextPage() {
    const newPage = this.state.page + 1;
    this.setState({ page: newPage });
    this.fetchData(newPage);
  }

  prevPage() {
    const newPage = this.state.page - 1;
    this.setState({ page: newPage });
    this.fetchData(newPage);
  }

  handleFavorite(data: DatasType) {
    const checkExist = localStorage.getItem("FavMovie");
    if (checkExist) {
      /*
      TODO: Sebelum ditambahkan ke list favorit, silahkan buat pengkondisian/cek 
      terlebih dahulu apakah film yang dipilih sudah ditambahkan atau belum, kasih alert jika ada, jika tidak silahkan push datanya ke localstorage
      */
      let parseFav: DatasType[] = JSON.parse(checkExist);
      parseFav.push(data);
      localStorage.setItem("FavMovie", JSON.stringify(parseFav));
      alert("Movie added to favorite");
    } else {
      localStorage.setItem("FavMovie", JSON.stringify([data]));
      alert("Movie added to favorite");
    }
  }

  componentDidMount() {
    this.fetchData(1);
  }

  render() {
    return (
      <Layout>
        {!this.state.loading && (
          <Carousel
            datas={this.state.datas.slice(0, 9)}
            content={(data) => (
              <div
                className='w-full h-full flex justify-center items-center bg-cover bg-center'
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
                }}
              >
                <p className="text-white tracking-widest font-bold break-words text-2xl text-center">
                  {data.title}
                </p>
              </div>
            )
            }
          />
        )
        }
        <div className='mx-12 pt-12'>
          <h2 className={`font-bold text-2xl text-white`}>Playing Now!!!</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3 xl:grid-cols-4 xl:gap-3 m-3'>
          {this.state.loading ? (
            <Loader />
          ) : (
            this.state.datas.map((data) => (
              <Card
                id={data.id}
                key={data.id}
                title={data.title}
                image={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                overview={data.overview.substring(0, 45) + "..."}
                button1_name="Add To Favorite"
                onClickFav={() => this.handleFavorite(data)}
              />
            ))
          )}
        </div>
        <div className="btn-group w-full justify-center">
          <button
            className="btn"
            onClick={() => this.prevPage()}
            disabled={this.state.page === 1}
          >
            «
          </button>
          <button className="btn normal-case">Page {this.state.page}</button>
          <button
            className="btn"
            onClick={() => this.nextPage()}
            disabled={this.state.page === this.state.totalPage}
          >
            »
          </button>
        </div>
      </Layout >
    )
  }
}


