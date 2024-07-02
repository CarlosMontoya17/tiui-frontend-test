"use client";
import React, { useEffect, useState } from 'react';
import './TaskList.scss';
import { ITask } from '@/domain';
import { TaskItem } from '../../organisms';
import { Divider } from '@mui/material';

export type TaskListProps = {
	items: ITask[];
	onCheck: (item: ITask) => any;
	onDelete: (item: ITask) => any;
	onEdit: (item: ITask) => any;
}

const TaskList: React.FC<TaskListProps>  = ({ items, onDelete, onEdit, onCheck }) => {
	const [ listOfItems, setListOfItems ] = useState<ITask[]>(items);

	const clickCheck = (id: number, status: boolean) => {
		const _updated: (ITask | null) =  listOfItems.reduce<ITask | null>((updated, item) => {
			if (item.id === id) {
				return { ...item, status: status };
			}
			return updated?? item;
		}, null);		
		if(!!_updated) {
			onCheck(_updated);
		}
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
				{ items.length==0 && <span> SIN TAREAS </span> }
				{ items.length!=0 && listOfItems.map((v) => (
					<React.Fragment key={v.id}>
						<TaskItem key={v.id} 
						onCheck={(_: number, status:boolean) => clickCheck(v.id, status)} 
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
