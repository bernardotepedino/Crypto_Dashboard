import styled from 'styled-components';

export const lightBlue ="#565b77";

export const Card= styled.div`
    margin-top:20px;
    padding: 20px;
    background-color:white;
    box-shadow: 0px 3px 5px ${lightBlue};
    border: 1px solid black;
    ${({height})=> height && `height: ${height}px;`}

    @media (max-width: 1200px)
    {
        padding:10 px;
    }
`