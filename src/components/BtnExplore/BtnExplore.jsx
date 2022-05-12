import { Container } from "./style";
import leftArrowImg from '../../assets/images/left_arrow.svg'


export default function BtnExplore(){
    return(
        <Container>
            <p>Explore mais</p>
            <img src={leftArrowImg} alt="explore mais" />
        </Container>
    )
}