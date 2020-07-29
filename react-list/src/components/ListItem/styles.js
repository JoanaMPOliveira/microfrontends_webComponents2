import styled from 'styled-components';


export const ListItemStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: white;
    border-bottom: 4px solid #f0f0f0;
    padding: 10px 40px;
`
export const ListItemImageWrapperStyled = styled.div`
    width: 150px;
    height: 150px;
    overflow: hidden;
    position:relative;
`

export const ListItemImageStyled = styled.img`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    min-width: 100px;
    /* max-height: 150px; */
`

export const ListItemInfoStyled = styled.div`
    width: inherit;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5px 20px;
`

export const ListItemBtnWrapperStyled = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`

export const ListItemBtnStyled = styled.button`
    background: white;
    color: grey;
    font-weight: 600;
    border: 1px solid #f0f0f0;
    box-shadow: 0 0 10px 0 #f0f0f0;

    margin: 20px 5px;
    padding: 10px 30px;
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    
`