"use client";
import { AppBar, Toolbar, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

export type NavbarProps = {
	children: ReactNode;
}

const Navbar: React.FC<NavbarProps>  = ({ children }) => {
	return (
	<>
		<AppBar position='fixed'>
			<Toolbar variant='dense'>
			<Typography variant="h6" color="inherit" component="div">
				ToDo App
			</Typography>
			</Toolbar>	
		</AppBar>
		<main>{children}</main>
	</>
	);
};

export default Navbar;
