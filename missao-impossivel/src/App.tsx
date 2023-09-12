import { Header } from './components/Header';
import React, {useState, useEffect, useRef} from 'react';
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
    titulo: "Missão impossivel 2",
		descricao : "ISSO ISSO ISSO"
  },
  {
    id: 2,
    imagem: card2,
    titulo: "Missão impossivel 3",
		descricao : "ISSO ISSO ISSO"
  },
  {
    id: 3,
    imagem: card3,
    titulo: "Missão impossivel Nação secreta",
		descricao : "ISSO ISSO ISSO"
  },
  {
    id: 4,
    imagem: card4,
    titulo: "Missão impossivel acerto de contas",
		descricao : "ISSO ISSO ISSO"
  },
]

function App() {

	const refFilmeModal = useRef({
		id: 1,
		titulo: '',
		descricao : ''
	})

  const [modalIsOpen, setOpen] = useState(false);

	function handleOpenModal(filme: any){
		refFilmeModal.current = filme
		setOpen(true)
	}
	function handleCloseModal(){
		setOpen(false)
	}

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
          <div onClick={() =>handleOpenModal(filme)}>
            <Card  imagem={filme.imagem} titulo={filme.titulo} />
          </div>
        ))
      }
      </div>


      <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
        <ModalHeader>
          <h2>{refFilmeModal.current.titulo}</h2>
        </ModalHeader>
        <ModelBody>
          <h3>{refFilmeModal.current.descricao}</h3>
        </ModelBody>
      </Modal>

    </React.Fragment>
  );
}

export default App;
