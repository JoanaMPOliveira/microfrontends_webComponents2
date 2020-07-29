import styled from 'styled-components';

export const SearchFormStyled = styled.form`
    display: ${props => props.visibility === 'visible' ? 'block' : 'none' };
    position: absolute;
    transform: translate(-100%, 0%);
    top: 60px;
    left: calc(100% - 120px);
    width: 60%;
    border: none;
`

export const SearchFormInputStyled = styled.input`
    width: 100%;
    padding: 10px 50px 10px 20px;
    border: none;
    color: grey;
    font-size: 14px;
`