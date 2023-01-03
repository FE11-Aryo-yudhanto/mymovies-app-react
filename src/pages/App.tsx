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

export class App extends Component {
  state = {
    datas: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    setTimeout(() => {
      this.setState({
        datas: [
          {
            id: 1,
            title: "The Avengers",
            image: "https://www.themoviedb.org/t/p/original/tYqp6vEOo8YlVWrYQvt9nyOhsA2.jpg",
            overview: "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",

          },
          {
            id: 2,
            title: "Captain America: The Winter Soldier",
            image: "https://upload.wikimedia.org/wikipedia/id/e/e8/Captain_America_The_Winter_Soldier.jpg",
            overview: "As Steve Rogers adapts to the complexities of a contemporary world, he joins Natasha Romanoff and Sam Wilson in his mission to uncover the secret behind a deadly, mysterious assassin.",
          },
          {
            id: 3,
            title: "Captain America: Civil War",
            image: "https://kanitaandiali.files.wordpress.com/2016/07/civil-war.jpeg",
            overview: "Friction arises between the Avengers when one group supports the government's decision to implement a law to control their powers while the other opposes it.",
          },
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
            id: 6,
            title: "Spider-Man: No Way Home ",
            image: "https://cdn1-production-images-kly.akamaized.net/ByfoNPSMTMfPEtHmnQMFhgGP80Y=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3635478/original/025116000_1637133546-253154135_2120128131476179_3401639978712735642_n.jpg",
            overview: "Spider-Man seeks the help of Doctor Strange to forget his exposed secret identity as Peter Parker. However, Strange's spell goes horribly wrong, leading to unwanted guests entering their universe.",
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
                    <h2 className={`font-bold text-2xl text-white`}>Playing Now!!!</h2>
                </div>
        <div className='grid grid-cols-4 gap-3'>
          {this.state.loading ? (
            <Loader />
          ) : (
            this.state.datas.map((data: DatasType) => (
              <Card
               key={data.id}
               title={data.title}
               image={data.image}
               overview={data.overview.substring(0, 50) + "..." }
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

export default App
