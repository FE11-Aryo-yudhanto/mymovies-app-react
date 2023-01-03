import React, { Component } from 'react'

interface CardProps{
    title: string
    image: string
    overview: string
    button1_name: string
    button2_name: string
}

export class Card extends Component<CardProps> {
  render() {
    return (
        <div className="card bg-base-100 shadow-xl image-full mx-10 my-10">
        <figure><img src={this.props.image} alt="Shoes" /></figure>
        <div className="card-body ">
          <h2 className="card-title text-2xl font-bold">{this.props.title}</h2>
          <p>{this.props.overview}</p>
          <div className="card-actions flex justify-center">
            <button className="btn btn-primary border-none bg-base-200 hover:bg-white hover:text-black" >{this.props.button1_name}</button>
            <button className="btn btn-primary border-none bg-base-200 hover:bg-white hover:text-black" >{this.props.button2_name}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Card