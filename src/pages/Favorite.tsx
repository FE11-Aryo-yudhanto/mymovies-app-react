import React, { Component } from 'react'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Loader from '../components/Loader'

interface DatasType {
  id: number
  title: string
  image: string
  overview: string
}

interface Propstype { }

interface StateType {
  loading: boolean
  datas: DatasType[]
}

export class Favorite extends Component<Propstype, StateType> {
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
    setTimeout(() => {
      this.setState({
        datas: [
          {
            id: 4,
            title: "Avengers: Infinity War",
            image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
            overview: "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.",
          },
          {
            id: 5,
            title: "Avengers: Endgame",
            image: "https://www.themoviedb.org/t/p/original/pvdwjHFE1Xx4mijiDkc9WYJcDeX.jpg",
            overview: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
          },
          {
            id: 7,
            title: "Doctor Strange in the Multiverse of Madness",
            image: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/04/07/2453686681.jpg",
            overview: "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse.",
          },
          {
            id: 8,
            title: "Black Panther: Wakanda Forever ",
            image: "https://lumiere-a.akamaihd.net/v1/images/sumbrk_payoff_1sht_eng_4d993829.jpeg",
            overview: "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.",
          },
        ],
        loading: false,
      });
    }, 3000);
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
                key={data.id}
                title={data.title}
                image={data.image}
                overview={data.overview.substring(0, 50) + "..."}
                button1_name="Add To Favorite"
                button2_name="Details"
              />
            ))
          )}
        </div>
      </Layout>
    )
  }
}

export default Favorite