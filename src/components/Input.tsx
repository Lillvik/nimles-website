import React from 'react';
import './Input.css';
import styled from "@emotion/styled";
import { Theme } from "../theme";


type InputProps = {
    theme?: Theme;
}

export const Input = styled.input<InputProps>` 
    width: 100%;
    padding: 12px 16px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: ${props=> props.theme.borderRadius};
    box-sizing: border-box;
`
