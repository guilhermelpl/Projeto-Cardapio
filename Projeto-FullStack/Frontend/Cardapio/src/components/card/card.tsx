import axios from 'axios'
import './card.css'
import { BASE_URL } from '../../utils'

import trash from '../../../public/image/lixeira.png'

interface CardProps {
    index: number,
    price: number,
    title: string,
    image: string
}

export function Card({ price, title, image, index }: CardProps) {

    function deleteFood() {
        axios.delete(BASE_URL + `/food/${index + 1}`)
    }

    return (
        <>
            <div className="card">
                <img onClick={() => console.log(index + 1)} className="trash" src={trash} alt="" />
                <img src={image} alt={title} />
                <h2>{title}</h2>
                <p><b>Valor: {price}$</b></p>
            </div>
        </>
    )
}