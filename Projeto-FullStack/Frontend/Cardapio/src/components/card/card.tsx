import axios from 'axios'
import './card.css'
import { BASE_URL } from '../../utils'

import trash from '../../../public/image/lixeira.png'

interface CardProps {
    id?: number,
    price: number,
    title: string,
    image: string
}

export function Card({ id, price, title, image }: CardProps) {

    function deleteFood() {
        axios.delete(BASE_URL + `/food/${id}`).then(() => {
            window.location.reload()
        })
    }

    return (
        <>
            <div className="card">
                <img onClick={() => deleteFood()} className="trash" src={trash} alt="" />
                <img src={image} alt={title} />
                <h2>{title}</h2>
                <p><b>Valor: {price}$</b></p>
            </div>
        </>
    )
}