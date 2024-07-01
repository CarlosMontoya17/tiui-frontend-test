"use client";
import React, { createContext, useContext, useState } from 'react';
import { FormTaskContext } from './entities/TaskContext.interface';

const FormContext = createContext<FormTaskContext>({
	id: undefined,
	title: '',
	text: '',
	setTitle: () => { },
	setText: () => { },
	setId: () => { },
	isValid: false
});

export type TaskContextProps = {
	children: React.ReactNode;
}

const TaskContext: React.FC<TaskContextProps>  = ({ children }) => {
	const [ title, setTitle ] = useState<string>('');
	const [ text, setText ] = useState<string>('');
	const [ id, setId ] = useState<number | undefined>(undefined);
	const isValid = !!title;

	return (
		<FormContext.Provider value={{ id, title, text, setId, setTitle, setText, isValid }}>
			{children}
		</FormContext.Provider>
	);
};
export const useTaskContext = () => useContext(FormContext);

export default TaskContext;
