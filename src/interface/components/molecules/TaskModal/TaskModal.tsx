"use client";
import React, { useEffect, useState } from 'react';
import './TaskModal.scss';
import { ITask } from '@/domain';
import { BehavorSubject, Subscriptor } from '@/application';
import { Dialog, DialogActions, DialogTitle, TextField } from '@mui/material';
import TextArea from '../../atoms/TextArea/TextArea';
import CustomButton from '../../atoms/CustomButton/CustomButton';
import { BsCheck2Circle, BsChevronDown } from 'react-icons/bs';
import { useTaskContext } from '@/context';

export type TaskModalProps = {
	onAdd: (task: ITask) => any;
	onClose: (confirm: boolean) => any;
}

export const taskModalState = new BehavorSubject<boolean>();

const TaskModal: React.FC<TaskModalProps>  = ({ onAdd, onClose }) => {
	const { id, title, text, setTitle, setText, setId, isValid } = useTaskContext();
	const [ errors, setErrors ] = useState({title: ''});
	const [ opened, setOpened ] = useState(false);
	// ModalControlling
	const close$ = new Subscriptor((value: boolean) => {
		if(value) open();
		else close();
	});
	useEffect(() => {
		taskModalState.subscribe(close$);
		return () => {
			taskModalState.unsubscribe(close$);
		};
	}, []);
	const open = () => {
		setOpened(true);
	};
	const close = () => {
		setOpened(false);
	};
	const handleClose = (_:{}, reason: "backdropClick" | "escapeKeyDown") => {
		if(reason && reason==="backdropClick") return;
		taskModalState.next(false);
	};

	//FormControlling
	const validate = () => {
		const _err = { title: '' };
		if(!title) {
			_err.title = "Se requiere un título de la Tarea"
		}
		setErrors(_err);
		return !Object.values(_err).some((error) => error);
	};

	const titleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setTitle(value);
	};

	const textChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setText(value);
	};


	const handleSubmit = (event: any) => {
		event.preventDefault();
		if (validate()) {
			close();
			onAdd({ id: id??0, title, text, date: new Date().toISOString(), status: false });
			setId();
			setTitle("");
			setText("");
		}
	}


	return (
		
			<Dialog open={opened} onClose={handleClose}
			disableEscapeKeyDown={false}
			className='custom-modal'
			aria-label='confirm action'
			fullWidth>
				<DialogTitle id="alert-dialog-title">
					Task Manager
				</DialogTitle>
				<form onSubmit={handleSubmit}>
					<div className='task-content' style={{ padding: "1.5rem 2rem" }}>
						<TextField id="outlined-basic" label="Tarea*" variant="outlined" name='title' onChange={titleChanges} value={title} />
						{errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
						<TextArea onChange={textChanges} value={text} placeholder='Descripción'/>
					</div>
					<DialogActions>
						<CustomButton Icon={BsChevronDown} color='error' size='medium' variant='outlined' text='Cerrar' onClick={() => onClose(isValid)}></CustomButton>
						<CustomButton Icon={BsCheck2Circle} color='success' size='medium' variant='contained' text={id?'Actualizar':'Añadir'} type='submit' disabled={!isValid}></CustomButton>
					</DialogActions>
				</form>
			</ Dialog>

	);
};

export default TaskModal;
