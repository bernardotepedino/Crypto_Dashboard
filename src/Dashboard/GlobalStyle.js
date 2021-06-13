import {createGlobalStyle} from "styled-components";
//import styled from "styled-components";


export const darkGrey= "#515263";
export const lightGrey= "#f7f7f7";

export const GlobalStyle=createGlobalStyle`
    body
    {
        color:${darkGrey};
        background-color:${lightGrey};
    }
`