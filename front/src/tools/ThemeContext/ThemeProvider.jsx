import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light'); // Default theme

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			setTheme(storedTheme);
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ThemeProvider;
