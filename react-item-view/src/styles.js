import styled from 'styled-components';

export const ItemViewStyled = styled.div`
    position: relative;
    display: ${props => props.visibility === 'visible' ? 'flex' : 'none' };
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
`

export const ItemViewImageWrapperStyled = styled.div`
    overflow: hidden;
    width: 100%;
    img {
        width: 90%;
        height: auto;
    }
`
export const ItemViewInfoStyled = styled.div`
    color: grey;
    width: 100%;
`
export const InfoHeaderStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`
export const InfoBodyStyled = styled.div`
    display: block;
    margin: 20px 0;
`
export const ButtonStyled = styled.div`
    position: absolute;
    transform: translate(0%, 50%);
    top: 100%;
    left: 0;
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