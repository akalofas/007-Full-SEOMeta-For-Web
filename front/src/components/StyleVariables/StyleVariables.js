import { useEffect } from 'react';
import { useTheme } from '../../tools/ThemeContext/ThemeContext';
import themeVariables from './Variables';

function StyleVariables() {
	const { theme } = useTheme(); // Use the custom hook to get the current theme

	useEffect(() => {
		let styleElement = document.getElementById('cssvariables');

		// If the style element does not exist, create it and append to head
		if (!styleElement) {
			styleElement = document.createElement('style');
			styleElement.type = 'text/css';
			styleElement.id = 'cssvariables';
			document.head.appendChild(styleElement);
		}

		// Choose the correct theme variables
		const currentThemeVariables = themeVariables[theme];

		// Generate CSS variable string from the theme variables object
		const cssVariableString = Object.keys(currentThemeVariables)
			.map((key) => `${key}: ${currentThemeVariables[key]};`)
			.join(' ');

		// Set or update the inner content of the style element
		styleElement.textContent = `
      :root {
        ${cssVariableString}
      }
    `;
	}, [theme]);

	return null;
}

export default StyleVariables;
