import { Container, SocialMedia, FirstLine, ContainerLinks, Copyright } from "./style";
import twitterImg from '../../assets/images/twitter.svg'
import instagraImg from '../../assets/images/instagram.svg'
import youtubeImg from '../../assets/images/youtube.svg'

export default function Footer(){
    return (
        <Container>
            <SocialMedia>
                <img src={twitterImg} alt="link para twitter" />
                <img src={instagraImg} alt="link para instagram" />
                <img src={youtubeImg} alt="link para youtube" />
            </SocialMedia>
            <FirstLine />
                <p>support@bendev.bendevoficial.com</p>
                <p>+55 65 996478931</p>
                <p>08:00 - 22:00 - Todos os dias</p>
            <FirstLine />
            <ContainerLinks>
                <p>Sobre</p>
                <p>Contato</p>
                <p>Blog</p>
            </ContainerLinks>
            <Copyright>
                <p>Copyright© OpenUI All Rights Reserved</p>
            </Copyright>
        </Container>
    )
}