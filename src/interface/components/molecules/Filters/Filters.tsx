"use client";
import React, { useState } from 'react';
import './Filters.scss';
import ChipBtn from '../../atoms/ChipBtn/ChipBtn';
import { FilterType } from '@/domain';

export type FiltersProps = {
	onChange: (filter: FilterType) => any;
}

const Filters: React.FC<FiltersProps>  = ({ onChange }) => {
	const [ filter, setFilter ] = useState<FilterType>(FilterType.FILTER_ALL);
	const handleFilter = (type: FilterType) => {
		setFilter(type);
		onChange(type);
	};
	return (
		<section className='filters'>
			<label> Filters </label>
			<div className='btns'>
				<ChipBtn onClick={() => handleFilter(FilterType.FILTER_ALL)} text='All' active={ filter==FilterType.FILTER_ALL }/>
				<ChipBtn onClick={() => handleFilter(FilterType.FILTER_PENDING)} text='Pendient' active={ filter==FilterType.FILTER_PENDING } />
				<ChipBtn onClick={() => handleFilter(FilterType.FILTER_DONE)} text='Ready' active={filter==FilterType.FILTER_DONE}/>
			</div>
		</ section>
	);
};

export default Filters;
