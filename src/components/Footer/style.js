import styled from 'styled-components'
import Line from '../Line'

export const Container = styled.section`
    width: 100%;
    height: min(100%, 21.25rem);

    display: flex;
    flex-direction: column;
    align-items: center;



    p{
        font-size: 1rem;
        line-height: 184%;
        color: #333333;
    }
`

export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 10.125rem;
`

export const ContainerLinks = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 17rem;
        margin-bottom: 1.45rem;

        p{
            font-size: 1rem;
            color: #000;
        }
`
export const Copyright = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2.82rem;
    background: #c4c4c4;

        p{
            font-size: 12px;
            color: #555555;
        }
`

export const FirstLine = styled(Line)`
    margin: 23px auto 18px auto;

`