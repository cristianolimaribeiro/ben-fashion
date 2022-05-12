
import { BackgroundBanner } from "./style"
import { ContainerText } from "./style"


export default function Banner(){


    return (
        <>
            <BackgroundBanner>
                <ContainerText>
                    <p>Luxury</p>
                    <p>Fashion</p>
                    <p>&#38;Acessories</p>
                </ContainerText>
                <button>Explorar Coleção</button>
                <ul className="dots">
                    <li className="dots__item"></li>
                    <li className="dots__item"></li>
                    <li className="dots__item"></li>
                </ul>
            </BackgroundBanner>
        </>
     )
}