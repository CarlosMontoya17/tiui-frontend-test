"use client";
import React, { useEffect, useState } from 'react';
import './TaskList.scss';
import { ITask } from '@/domain';
import { TaskItem } from '../../organisms';
import { Divider } from '@mui/material';

export type TaskListProps = {
	items: ITask[];
	onChanges: Function;
	onDelete: (item: ITask) => any;
	onEdit: (item: ITask) => any;
}

const TaskList: React.FC<TaskListProps>  = ({ items, onChanges, onDelete, onEdit }) => {
	const [ listOfItems, setListOfItems ] = useState<ITask[]>(items);

	const onCheck = (id: number, status: boolean) => {
		const updatedItems = listOfItems.map(item =>
			item.id === id ? { ...item, status: status } : item
		  );
		setListOfItems(updatedItems);
		onChanges(updatedItems);
	};

	useEffect(() => {
		setListOfItems(items);
    }, [items]);

	const clickDelete = (item: ITask) => {
		onDelete(item);
	};

	const clickEdit = (item: ITask) => {
		onEdit(item);
	};
	
	return (
		<>
			<ul className='list'>
				{listOfItems.map((v) => (
					<React.Fragment key={v.id}>
						<TaskItem key={v.id} 
						onCheck={(_: number, status:boolean) => onCheck(v.id, status)} 
						id={v.id} date={v.date}  title={v.title} text={v.text} status={v.status} 
						onDelete={(i) => clickDelete(i)} onEdit={clickEdit}/>
						<Divider component="li" sx={{ bgcolor: 'white', opacity:0.6 }} />
					</React.Fragment>
				))}
			</ul>
		</>
	);
};

export default TaskList;
