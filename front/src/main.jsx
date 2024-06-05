import React from "react";
import ReactDOM from "react-dom/client";
import { AppContainer } from "./AppContainer";
import { ThemeProvider } from './tools/ThemeContext/ThemeProvider';
import "./index.css";


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider>
			<AppContainer />
		</ThemeProvider>
	</React.StrictMode>
);
