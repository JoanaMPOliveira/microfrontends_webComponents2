import styled from 'styled-components';

export const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: ${props => props.visibility === 'visible' ? 'auto' : 0 };
    visibility: ${props => props.visibility === 'visible' ? 'visible' : 'hidden' };
`

export const ButtonStyled = styled.div`
    margin: 20px 0;
    padding: 10px 30px;
    color: white;
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    background: -webkit-linear-gradient(left, #00a1e4 0, #00a99d 100%);
    border: none;
    width: fit-content;
`
export const NoItemsStyled = styled.div`
    width: 100%;
    margin: 50px 0;
    padding: 50px;
    text-align: center;
    color: grey;
    background-color: white;
`
