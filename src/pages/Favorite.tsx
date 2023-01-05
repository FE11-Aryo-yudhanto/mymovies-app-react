import React, { Component } from 'react'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Loader from '../components/Loader'
import { DatasType,  } from '../utils/types/movie'

interface Propstype { }

interface StateType {
  loading: boolean
  datas: DatasType[]
}

export default class Favorite extends Component<Propstype, StateType> {
  constructor(props: Propstype) {
    super(props)
    this.state = {
      datas: [],
      loading: true,
    };
  }


  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const getFavMovie = localStorage.getItem("FavMovie")
    if(getFavMovie){
      this.setState({datas: JSON.parse(getFavMovie)})
    }
    this.setState({ loading: false });
  }

  removeFavMovie(data: DatasType){
    let dupeDatas: DatasType[] = this.state.datas.slice()
    const filterData = dupeDatas.filter((item) => item.id !== data.id)
    localStorage.setItem("FavMovie", JSON.stringify(filterData))
    alert(`Delete ${data.title} from favorite list`);
  }

  render() {
    return (
      <Layout>
        <div className='mx-12 pt-12'>
          <h2 className={`font-bold text-2xl text-white`}>Favorite Movie</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3 xl:grid-cols-4 xl:gap-3'>
          {this.state.loading ? (
            <Loader />
          ) : (
            this.state.datas.map((data) => (
              <Card
                id={data.id}
                key={data.id}
                title={data.title}
                image={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                overview={data.overview.substring(0, 50) + "..."}
                button1_name="Delete From Favorite"
                onClickFav={() => this.removeFavMovie(data)}
              />
            ))
          )}
        </div>
      </Layout>
    )
  }
}
