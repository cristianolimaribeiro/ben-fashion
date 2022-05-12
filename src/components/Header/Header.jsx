import { Container } from "./style";
import { Content } from "./style";
import menuImg from '../../assets/images/menu.svg'
import logoImg from '../../assets/images/logo_transparente.svg'
import searchImg from '../../assets/images/search.svg'
import bagImg from '../../assets/images/shopping_bag.svg'

export default function Header({open, setOpen}){
    return (
        <Container>
            <Content>
                <button open={open} onClick={() => setOpen(!open)}>
                    <img src={menuImg} alt="menu" />
                </button>
                <img className="logo" src={logoImg} alt="logo da loja" />
                <div>
                    <img src={searchImg} alt="lupa" />
                    <img src={bagImg} alt="sacola" />
                </div>
            </Content>
        </Container>
    )
}