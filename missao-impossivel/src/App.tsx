import { Header } from './components/Header';
import React, {useState, useEffect} from 'react';
import "./global.css"

import Modal, { ModalHeader, ModelBody} from "./components/Modal";


import card1 from "./imagens/card1.jpg"
import card2 from "./imagens/card2.jpg"
import card3 from "./imagens/card3.jpg"
import card4 from "./imagens/card4.jpg"
import { Card } from './components/Card';


const filmes = [
  {
    id: 1,
    imagem: card1,
    titulo: "Missão impossivel 2"
  },
  {
    id: 2,
    imagem: card2,
    titulo: "Missão impossivel 3"
  },
  {
    id: 3,
    imagem: card3,
    titulo: "Missão impossivel Nação secreta"
  },
  {
    id: 4,
    imagem: card4,
    titulo: "Missão impossivel acerto de contas"
  },  
]

function App() {
  
  const [modalIsOpen, setModalOpen] = useState(true);
  
  return (
    <React.Fragment>
      <Header tituloProp='Missão chinessa' />

       

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
      }}>
      {
        filmes.map(filme => (
          <>
            <Card imagem={filme.imagem} titulo={filme.titulo}  />
            <button onClick={()=> setModalOpen(true)}>Deatlhes</button>
          </>
        ))
      }
      </div>
      

      <Modal isOpenProp={modalIsOpen}>
        <ModalHeader>
          <h2>Chaves</h2>
        </ModalHeader>
        <ModelBody>
          <h3>Todos atentos olhando a TV</h3>
        </ModelBody>
      </Modal>

    </React.Fragment>
  );
}

export default App;
