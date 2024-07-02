"use client";
import { ButtonOwnProps } from '@mui/base';
import { Button } from '@mui/material';
import React from 'react';
import { IconType } from 'react-icons';
import './CustomButton.scss';

export interface CustomButtonProps extends ButtonOwnProps {
	Icon?: IconType;
	onClick?: () => any;
	variant: "contained" | "outlined";
	color: "error" | "primary" | "inherit" | "secondary" | "success" | "info" | "warning";
	size: "small" | "medium" | "large";
	text?: string;
	type?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<CustomButtonProps>  = ({ Icon, variant, color, size, text, onClick, disabled=false, type }) => {
	const clicked = () => {
		if(!!onClick) {
			onClick();
		}
	};
	return (
		<Button className='btn-icon' variant={variant} color={color} size={size} onClick={clicked} disabled={disabled} type={type}>
 			{ Icon? < Icon />: <></> }
			{ text ?? '' }
 		</Button>
	);
};

export default CustomButton;
