import React from 'react'
import styles from "./style.module.css";
import {useState} from 'react'

interface IHeaderProps {
	tituloProp: string
}

export function Header({ tituloProp }:IHeaderProps){

	const [titulo, setTitulo] = useState<string>(tituloProp);

	const { title } = styles;

	return(
	  <>
			<header className="header"
				style={{
					display: "flex",
					justifyContent: "space-around",
					backgroundColor: "red",
					padding: "20px"
				}}
			>
				<div className="containerLeftLogo">
						<h1 style={{ textAlign: 'center'}} className={title}>{titulo}</h1>
						<h2 style={{
								textAlign:"center",
								color: "blue"
						}}>Protocolo Pastel Facil</h2>
				</div>
				<div className="contentRight"

				>
						<ul style={{
							display: "flex",
							listStyle: "none",
							alignItems: "center",
							marginTop: "10px",
							width: "100%"
						}}>
								<li style={{
									padding: "10px"
								}}><strong>Home</strong></li>
								<li style={{
									padding: "10px"
								}}><strong>Sobre</strong></li>
								<li style={{
									padding: "10px"
								}}><strong>Contato</strong></li>
						</ul>
				</div>
    	</header>
    </>
	)
}