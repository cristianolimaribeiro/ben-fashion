import styled from 'styled-components'

export const Container = styled.div`
  margin: 24px auto 24px auto ;
  	position: relative;
  	width: 7.875rem;
  	border: 1px solid #E5E5E5;   
    
        &::before{
            content: '';
                position: absolute;
                width: 8px;
                height: 8px;
                border: 2px solid #E5E5E5;
                right: 45%;
                transform: rotate(42deg);
                top: -6px;
                background: #FFF;       
        }
`	