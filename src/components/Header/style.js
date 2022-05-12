import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 3.75rem;
    background: #E7EAEF;
    padding: .875rem ;

    display: flex;
    align-items: center;
    overflow: hidden;
`
export const Content = styled.div`
    width: min(100%, 375px) ;
    height: 3.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    button{
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .logo{
        width: 5.25rem;
    }
    div{
        display: flex;
        align-items: center;
    }
    img:last-child{
        margin-left: 1.5rem;
    }
`