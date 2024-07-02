"use client";
import React, { useEffect, useState } from 'react';
import './TaskItem.scss';
import { ITask } from '@/domain';
import { SimpleModalComponent } from '../../molecules/SimpleModal/SimpleModal';
import { Checkbox, Tooltip } from '@mui/material';
import Chip from '../../atoms/Chip/Chip';
import CustomButton from '../../atoms/CustomButton/CustomButton';
import { BsCalendar, BsCalendar2CheckFill, BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { formatDate } from '@/utils';

export interface TaskItemProps extends ITask {
	onCheck: (id: number, state: boolean) => any;
	onDelete: (item: ITask) => any;
	onEdit: (item: ITask) => any;
}

const TaskItem: React.FC<TaskItemProps>  = ({ id, title, text, status, date, onCheck, onEdit, onDelete }) => {
	const confirmDelete = new SimpleModalComponent();
	const [ checked, setChecked ] = useState(status);
	const [ task, setTask ] = useState<ITask>({ id, title, text, date, status });
	const DeleteModalProvider = confirmDelete.Provider;
	
	useEffect(() => { 
		setTask({
			id,
			title,
			text,
			date,
			status
		});
		setChecked(status);
	}, [id, title, text, date, status]);

	const toggle = () => {
		const _state = !checked;
		setChecked(_state);
		onCheck(id, _state);
	};
	const handleEdit = () => {
		onEdit(task);
	};
	const handleDelete = () => {
		confirmDelete.State.next(true);
	};
	const deleteItem = () => {
		onDelete(task);		
	};

	return (
		<>
			<DeleteModalProvider title='Are U Sure?' text='This activity will be delete' accept={deleteItem} cancel={() => {}}></DeleteModalProvider>
			<li className='list'>
				<Tooltip title={checked ? 'Change to pendient': 'Change to ready'}>
					<Checkbox onClick={toggle} checked={checked}  icon={<BsCalendar color='white' />} checkedIcon={<BsCalendar2CheckFill />}></Checkbox>
				</Tooltip>
				<div className={`texts${checked ? ' checked': ''}`}>
					<h5> { task.title } </h5>
					<span> { task.text } </span>
				</div>
				

				<div className="tools">
					<Chip text={ checked ? 'READY': 'PENDIENT' } bgColor={checked?'#46c946':''} fgColor={checked?'white':''} />
					<Chip text={formatDate(date)} />
					<CustomButton Icon={BsFillPencilFill} variant='contained' color='primary' size='small' onClick={handleEdit}/>
					<CustomButton Icon={BsFillTrashFill} variant='contained' color='error' size='small' onClick={handleDelete}/>
				</div>
			</li>
		</>
	);
};

export default TaskItem;
