"use client";
import TaskContext from '@/context/TaskContext/TaskContext';
import { Home } from '@/interface/pages';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRoutes: React.FC<any>  = () => {
	return (
		<TaskContext>
			<Routes>
				<Route path='/' element={<Home />}></Route>
			</Routes>
		</TaskContext>
	);
};

export default AppRoutes;
