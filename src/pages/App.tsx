import React, { Component } from 'react'
import axios from 'axios'

import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Layout from '../components/Layout'
import Loader from '../components/Loader'

interface DatasType {
  id: number
  title: string
  poster_path: string
  overview: string
}

interface Propstype { }

interface StateType {
  loading: boolean
  datas: DatasType[]
}

export class App extends Component<Propstype, StateType> {
  constructor(props: Propstype) {
    super(props)
    this.state = {
      datas: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get(`now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
      .then((data) => {
        console.log("data:", data)
        console.log("data:", data.data)
        const { results } = data.data
        this.setState({ datas: results })
        console.log("hasil:", results)
      }).catch((err) => {
        console.log("error", err)
      }).finally(() =>
        this.setState({ loading: false })
      )
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
                key={data.id}
                title={data.title}
                image={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                overview={data.overview.substring(0, 45) + "..."}
                button1_name="Add To Favorite"
                button2_name="Details"
              />
            ))
          )}
        </div>
      </Layout >
    )
  }
}

export default App
