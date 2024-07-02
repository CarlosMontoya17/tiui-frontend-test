"use client";
import { InputProps } from '@mui/base';
import { styled } from '@mui/system';
import React from 'react';

export interface TextAreaProps {
	placeholder?: string;
	value?: string | number | readonly string[];
    onChange?: InputProps['onChange'];
}


const CustomArea = styled("textarea")(
	({ }) => `
	background-color: white;
    padding: 16.5px 14px;
    font-size: 1rem;
    border-radius: 0.375rem;
    border: 1px solid #b8b8b8;
    resize: none;
    color: black;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    height: 10rem;
    &:focus-visible {
        outline: 0;
        box-shadow: 0px 0px 1px 2px #0c85ff96;
    }
	`);

const TextArea: React.FC<TextAreaProps>  = ({placeholder, value, onChange}) => {
	return <CustomArea aria-label="description" placeholder={placeholder} value={value} onChange={onChange} />;
};

export default TextArea;
