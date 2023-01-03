import React, { Component } from 'react'
import DetailsCard from '../components/DetailsCard';
import Layout from '../components/Layout'
import Loader from '../components/Loader'

interface DatasType {
    id: number
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

export class Details extends Component {
    state = {
        datas: {},
        loading: true,
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        setTimeout(() => {
            this.setState({
                // datas:
                // {
                //     id: 1,
                //     title: "The Avengers",
                //     image: "https://www.themoviedb.org/t/p/original/tYqp6vEOo8YlVWrYQvt9nyOhsA2.jpg",
                //     tagline: "Avengers, assemble!",
                //     rating: 8.5,
                //     release: "May 4, 2012",
                //     genre: "Action, Superhero",
                //     runtime: 125,
                //     language: "English",
                //     popularity: "100000",
                //     companies: "Marvel",
                //     budget: 220000000,
                //     revenue: 1519000000,
                //     overview: "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
                // },
                loading: false,
            });
        }, 3000);
    }
    render() {
        return (
            <Layout>
                <div className=''>
                    {this.state.loading ? (
                        <Loader />
                    ) : (
                        // this.state.datas.map((data: DatasType) => (
                            <DetailsCard
                                // key={data.id}
                                // title={data.title}
                                // image={data.image}
                                // tagline={data.tagline}
                                // rating={data.rating}
                                // release={data.release}
                                // genre={data.genre}
                                // runtime={data.runtime}
                                // language={data.language}
                                // popularity={data.popularity}
                                // companies={data.companies}
                                // budget={data.budget}
                                // revenue={data.revenue}
                                // overview={data.overview}
                                 
                                // key={this.state.datas.id}
                                // title={this.state.datas.title}
                                // image={this.state.datas.image}
                                // tagline={this.state.datas.tagline}
                                // rating={this.state.datas.rating}
                                // release={this.state.datas.release}
                                // genre={this.state.datas.genre}
                                // runtime={this.state.datas.runtime}
                                // language={this.state.datas.language}
                                // popularity={this.state.datas.popularity}
                                // companies={this.state.datas.companies}
                                // budget={this.state.datas.budget}
                                // revenue={this.state.datas.revenue}
                                // overview={this.state.datas.overview}

                                key={1}
                                title={"The Avengers"}
                                image={"https://www.themoviedb.org/t/p/original/tYqp6vEOo8YlVWrYQvt9nyOhsA2.jpg"}
                                tagline={"Avengers, assemble!"}
                                rating={8.5}
                                release={"May 4, 2012"}
                                genre={"Action, Superhero"}
                                runtime={125}
                                language={"English"}
                                popularity={"100000"}
                                companies={"Marvel"}
                                budget={220000000}
                                revenue={1519000000}
                                overview={"Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task."}
                            />
                        // ))
                    )}
                </div>
            </Layout>
        )
    }
}

export default Details