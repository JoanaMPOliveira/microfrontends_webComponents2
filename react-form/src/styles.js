import styled from 'styled-components';

export const FormStyled = styled.form`
    padding: 20px;
    display: ${props => props.visibility === 'visible' ? 'flex' : 'none' };    
    height: ${props => props.visibility === 'visible' ? 'auto' : 0 };    
    flex-direction: column;
    justify-content: center;
    align-items:start;
`
export const FormGroupStyled = styled.div`
    width: 80%;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    label {
        padding: 10px;
        color: grey;
        font-size: 14px;
        text-transform: uppercase;
        width: 20%;
        text-align: left;
    }
    input {
        padding: 10px;
        color: grey;
        font-size: 14px;
        width: 100%;
        text-align: left;
        border: 1px solid #f0f0f0;
        box-shadow: 0 0 10px 0 grey;
        
    }
    textarea {
        padding: 10px;
        color: grey;
        font-size: 14px;
        width:100%;
        border: 1px solid #f0f0f0;
        box-shadow: 0 0 10px 0 grey;

    }
`
export const ButtonGroupStyled = styled.div`
    margin: 20px 10% 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
`;
export const ButtonInputStyled = styled.input`
    margin-left: 20px;
    padding: 10px 30px;
    width: 250px;
    height: 50px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    background: -webkit-linear-gradient(left, #00a1e4 0, #00a99d 100%);
    color: white;
    border: 1px solid transparent;
    box-shadow: 0 0 10px 0 white;
    transition: 0.5s ease-in-out;
    &:hover,
    &:focus {
        transform: scale(1.05);
    }
    `
export const ButtonCancelStyled = styled.a`
    padding: 10px 30px;
    width: 250px;
    height: 50px;
    font-size: 16px;
    font-weight: 600;
    background-color: white;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    box-shadow: 0 0 10px 0 grey;
    transition: 0.5s ease-in-out;
    span {
        background: -webkit-linear-gradient(left, #00a1e4 0, #00a99d 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    &:hover,
    &:focus {
        transform: scale(1.05);
    }    
`
export const FormTitleStyled = styled.div`
    width: 100%;
    text-align: center;
    padding: 0px 0 60px;
    h1 {
        background: -webkit-linear-gradient(left, #00a1e4 0, #00a99d 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`