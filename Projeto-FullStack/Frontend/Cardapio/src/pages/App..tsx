import { useState } from 'react';
import { Card } from '../components/card/card';
import { useFoodData } from '../hooks/useFoodData';
import { CreateModal } from '../components/create-modal/create-modal';

import './App.css'

export function App() {
  const [show, setShow] = useState(false);

  const { data } = useFoodData();

  const handleOpenModal = () => {
    setShow(prev => !prev);
  };

  return (
    <>
      <div className='container'>
        <h1>Cardápio</h1>
        <div className="card-grid">
          {data?.map((item, index) => <Card key={index} price={item.price} title={item.title} image={item.image} id={item?.id}/>
          )}
        </div>
        {show && <CreateModal closeModal={handleOpenModal} />}
        <button
          onClick={() => setShow(!show)}
        >Cadastrar comida</button>
      </div>
    </>
  );
}
