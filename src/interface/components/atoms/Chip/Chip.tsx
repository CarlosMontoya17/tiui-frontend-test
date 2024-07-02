"use client";
import { styled } from '@mui/system';
import React from 'react';

const CustomChip = styled('div')(
	() => 
		`
		width: fit-content;
		padding: 0.25rem 0.5rem;
		background-color: #373737;
		border-radius: 0.375rem;
		color: #bdbdbd;
		font-weight: 600;
		font-size: 0.85rem;
`);

export type ChipProps = {
	text: string;
	bgColor?: string;
	fgColor?: string;
}

const Chip: React.FC<ChipProps>  = ({text, bgColor, fgColor}) => {
	return (
		<CustomChip style={{ "backgroundColor": bgColor, "color": fgColor }}>
			{text}
		</CustomChip>
	);
};

export default Chip;
