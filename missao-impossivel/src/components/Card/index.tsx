import React from "react";

interface ICardProps {
  imagem: string;
  titulo: string;
}
export function Card( { imagem, titulo}:ICardProps){
    return (
        <>
            <div
             style={{
                backgroundColor: '#303030',
                padding: 20,
                margin: 20,
                borderRadius: 8,
                width: 200,
                cursor: 'pointer'
              }}
            >
                
                <img src={imagem} alt="Imagem do card" width="100% " />
                
                <h2
                style={{
                    marginTop: 10,
                    textAlign: 'center'
                  }}
                >{titulo}</h2>
            </div>
        </>
    )
}