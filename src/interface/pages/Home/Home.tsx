"use client";
import { useTaskContext } from '@/context';
import { FilterType, ITask, StorageKeys } from '@/domain';
import { AppStore, getLocalStorage, removeItem, setItems } from '@/infraestructure';
import CustomButton from '@/interface/components/atoms/CustomButton/CustomButton';
import { SimpleModalComponent, taskModalState } from '@/interface/components/molecules';
import Filters from '@/interface/components/molecules/Filters/Filters';
import TaskModal from '@/interface/components/molecules/TaskModal/TaskModal';
import TaskList from '@/interface/components/templates/TaskList/TaskList';
import React, { useEffect, useMemo, useState } from 'react';
import { BsCalendar2Plus } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import './Home.scss';

export type HomeProps = {
}

const Home: React.FC<HomeProps>  = ({}) => {
	const CancelTaskModal = new SimpleModalComponent();
	const CancelModalProvider = CancelTaskModal.Provider;
	const dispatch = useDispatch();
	const stateItems = useSelector((store: AppStore) => store.items);
	const { setTitle, setText, setId } = useTaskContext();
	const [filter, setFilter] = useState<string>(FilterType.FILTER_ALL);

	const filteredItems = useMemo(() => {
		switch (filter) {
			case FilterType.FILTER_DONE:
				return stateItems.filter(item => item.status === true);
			case FilterType.FILTER_PENDING:
				return stateItems.filter(item => item.status === false);
			default:
				return stateItems;
		}
	}, [stateItems, filter]);

	useEffect(() => {
		dispatch(setItems(getLocalStorage(StorageKeys.Items) ? JSON.parse(getLocalStorage(StorageKeys.Items) as string): stateItems ));
	},[]);

	const changes = (list: ITask[]) => {
		dispatch(setItems(list));
	};

	const onDelete = (item: ITask) => {
		dispatch(removeItem(item));
	};

	const openTaskModal = () => {
		taskModalState.next(true);
	};

	const findTask = (task: ITask) => stateItems.find(p => p.id === task.id);

	const addTask = (task: ITask) => {
		let _list: ITask[] = [];
		if(task.id == 0) {
			_list = [...stateItems, 
				{
					...task,
					id: stateItems.reduce((maxId, item) => { return item.id > maxId ? item.id : maxId}, 0)+1,
					date: new Date().toISOString(),
					status: false
				}
			];
		}
		else if(findTask(task)) {
			const index = stateItems.findIndex(item => item.id === task.id);
			if(index > -1) {
				_list = stateItems.map(item =>
					item.id === task.id ? { ...item, ...task } : item
				);
			}
		}
		dispatch(setItems(_list));
	}

	const cancelTask = (confirm: boolean) => {
		if(confirm) {
			CancelTaskModal.State.next(true);
			return;
		}
		taskModalState.next(false);
		setId();
		setTitle("");
		setText("");
	}

	const onEdit = (item: ITask) => {
		setId(item.id);
		setTitle(item.title);
		setText(item.text);
		taskModalState.next(true);
	};

	const handleFilter = (filter: FilterType) => {
		setFilter(filter);
	};

	return (
		<> 
			<CancelModalProvider title='¿Estás seguro?' text='Se borrarán los cambios realizados' accept={() => cancelTask(false)} cancel={() => {}}/>
			<TaskModal onAdd={addTask} onClose={cancelTask} ></TaskModal>
			<section className='view'>
				Lista To-Do:
				<div className="filter-tools">
					<Filters onChange={handleFilter} />
					<CustomButton Icon={BsCalendar2Plus} color='primary' variant='contained' size='large' text='Add' onClick={openTaskModal}/>
				</div>
				<div className='list'>
					<TaskList items={filteredItems} onChanges={changes} onDelete={onDelete} onEdit={onEdit}/>
				</div>
			</section>
		</>
	);
};

export default Home;
