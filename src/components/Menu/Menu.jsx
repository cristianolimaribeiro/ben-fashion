import { StyledMenu } from './style'
import closeImg from '../../assets/images/close.svg'
export default function Menu({open, setOpen }){
    return (
        <StyledMenu open={open}>
          <button open={open} onClick={() => setOpen(!open)}> 
            <img src={closeImg} alt="botão de fechar" />
          </button>
          <a href="/">Outer</a>
          <a href="/">Dress</a>
          <a href="/">Blouse/Shirt</a>
          <a href="/">T-Shirt</a>
          <a href="/">Knitwear</a>
          <a href="/">Skirt</a>
          <a href="/">Pants</a>
          <a href="/">Denim</a>
          <a href="/">Kids</a>
      </StyledMenu>
    )
}