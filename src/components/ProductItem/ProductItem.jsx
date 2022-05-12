import { Container } from './style'
export default function ProductItem({titulo, src, preco}){

    return (
        <Container>
            <img src={src} alt={titulo} />
            <h2>{titulo}</h2>
            <p>${preco}</p>
        </Container>
    )
}