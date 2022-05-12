import styled from 'styled-components'

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: min(100%, 375px);
  background: #E5E5E5;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  button{
    background: transparent;
    border: none;
    outline: none;
    margin-bottom: 2.5rem;
  }

    a{
      font-size: 1rem;
      line-height: 2.875rem;
      text-decoration: none;
      color: #333;
      margin-left: .75rem;
    }
`