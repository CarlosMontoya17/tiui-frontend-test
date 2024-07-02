"use client";
import { styled, useTheme } from '@mui/system';
import React from 'react';



const CustomChipBtn = styled('button')(
	() => 
`
    width: fit-content;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    font-weight: 600;
    font-size: 0.85rem;
`);

export type ChipBtnProps = {
	text: string;
	active: boolean;
	onClick: () => any;
}

const ChipBtn: React.FC<ChipBtnProps>  = ({ text, active, onClick }) => {
	const primary = '#1976D2';	
	return (
		<CustomChipBtn onClick={onClick} style={active ? { backgroundColor: primary } : {} }>
			{text}
		</CustomChipBtn>
	);
};

export default ChipBtn;
