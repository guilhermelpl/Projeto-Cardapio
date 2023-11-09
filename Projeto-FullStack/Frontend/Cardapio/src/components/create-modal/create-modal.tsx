import { useState } from 'react';
import { BASE_URL } from '../../utils';

import "./modal.css";
import axios from 'axios';

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");

    function handleSubmit(){
        axios.post(BASE_URL + '/food', {
            title: title,
            price: price,
            image: image
        }).then(() => {
            closeModal()
            window.location.reload()
        })
    }
    
    return(
        <div className="modal-overlay">
            <div className="modal-body">
            <div className="close" onClick={() => closeModal()}>X</div>
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="Nome:" value={title} updateValue={setTitle}/>
                    <Input label="Preço:" value={price} updateValue={setPrice}/>
                    <Input label="imagem:" value={image} updateValue={setImage}/>
                </form>
                <button onClick={() => handleSubmit()} className="btn-secondary">
                    Cadastrar
                </button>
            </div>
        </div>
    )
}

// import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
// import { FoodData } from '../../interface/FoodData';
// const { mutate } = useFoodDataMutate();
// function handleSubmit() {
//     const foodData: FoodData = {
//         title, 
//         price,
//         image
//     }
//     mutate(foodData);
//     closeModal();
// }