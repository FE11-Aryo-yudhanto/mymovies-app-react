import {useNavigate} from 'react-router-dom'
import { FC } from 'react'

import Button from './Button'

interface CardProps {
  id: number
  title: string
  image: string
  overview: string
  button1_name: string
  onClickFav?: () => void
}

const Card: FC<CardProps> = ({id, title, button1_name, image, overview, onClickFav }) => {
  const navigate = useNavigate();
  
  function onClickDetail() {
    navigate(`/movie/${id}`);
  }

    return (
      <div className="card bg-base-100 shadow-xl image-full mx-10 my-10 transition hover:scale-110">
        <figure>
          <img src={image} alt={title} onClick={() => onClickDetail()}/>
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-2xl font-bold" onClick={() => onClickDetail()}>{title}</h2>
          <p onClick={() => onClickDetail()}>{overview}</p>
          <div className="card-actions flex justify-center">
            <Button className="btn btn-primary border-none bg-base-200 hover:bg-white hover:text-black transition hover:scale-105" label={button1_name} onClick={onClickFav} />
          </div>
        </div>
      </div>
    )
  }

export default Card