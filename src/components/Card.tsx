import React, { Component } from 'react'
import Button from './Button'
import { withRouter } from '../utils/navigation'

interface CardProps {
  id: number
  title: string
  image: string
  overview: string
  button1_name: string
  onClickFav?: () => void
  navigate?: any
  params?: any  
}

class Card extends Component<CardProps> {
  onClickDetail() {
    this.props.navigate(`/movie/${this.props.id}`);
  }
  render() {
    return (
      <div className="card bg-base-100 shadow-xl image-full mx-10 my-10 transition hover:scale-110">
        <figure>
          <img src={this.props.image} alt={this.props.title} onClick={() => this.onClickDetail()}/>
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-2xl font-bold" onClick={() => this.onClickDetail()}>{this.props.title}</h2>
          <p onClick={() => this.onClickDetail()}>{this.props.overview}</p>
          <div className="card-actions flex justify-center">
            <Button className="btn btn-primary border-none bg-base-200 hover:bg-white hover:text-black transition hover:scale-105" label={this.props.button1_name} onClick={this.props.onClickFav} />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Card)