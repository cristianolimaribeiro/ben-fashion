import styled from 'styled-components'
import bannerImg from '../../assets/images/banner.png'

export const BackgroundBanner = styled.section`
    width: 100%;
    height: 43.75rem;
    margin-bottom: 2.5rem;
    background-image: url(${bannerImg});
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    overflow: hidden;

        button{
            position: absolute;
            bottom: 4rem;

            display: flex;
            justify-content: center;
            align-items: center;
            padding: .5rem 1.875rem;

            position: absolute;
            width: min(100%, 14.875rem);
            height: 2.5rem;

            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(.25rem);
            border-radius: 1.875rem;

            outline: none;
            border: none;

            font-size: 1rem;
            text-transform: uppercase;
            color: #FCFCFC;
        }
        .dots{
            position: absolute;

            bottom: 30px;
            display: flex;
            align-items: center;
            justify-content: center;

            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        .dots__item {

            height: 6px;
            width: 6px;
            transform: rotate(45deg);


            background: ${props => (props.isActive ? '#FCFCFC' : '' )};
            border: 1px solid #FCFCFC;

            margin: 0 4px;    
            
        }        

`

export const ContainerText = styled.div`
    width: 100%;

    margin-left: 5rem;

        p{
            font-family: 'Bodoni Moda', serif;
            font-style: italic;
            font-size: 3rem;
            font-weight: 700;
            line-height: 2.6875rem;
            letter-spacing: .075rem;
            text-transform: uppercase;
            color: #333333;
            mix-blend-mode: multiply;
            opacity: 0.7;
            overflow: hidden;
            
            &:nth-child(2){
                margin-left: 1.5rem;
            }
        }
`