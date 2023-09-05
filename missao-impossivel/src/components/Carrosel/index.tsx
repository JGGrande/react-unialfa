

interface ICarroselProps {
    filmes: {
        imagem: string,
        titulo: string
    }[]
}

export const Carrosel = ({ filmes }: ICarroselProps) => {

    const slides = filmes.map(filme => ({
        
    }));

    return (
        <>
        </>
    )
}