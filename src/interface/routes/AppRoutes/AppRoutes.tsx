"use client";
import { Home } from '@/interface/pages';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRoutes: React.FC<any>  = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>
		</Routes>
	);
};

export default AppRoutes;
