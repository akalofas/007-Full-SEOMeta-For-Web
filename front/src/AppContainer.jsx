import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './tools/i18n/i18n';
import AppPresentational from './AppPresentational'
import { seoAndOtherProps } from './tools/seoAndOtherProps';

export function AppContainer() {
	const { t, i18n } = useTranslation();
	const [count, setCount] = useState(0);

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	const appLogicProps = {
		changeLanguage,
		count,
		setCount,
		t
	};

	return (
		<AppPresentational
			appLogic={appLogicProps}
			seoAndOther={seoAndOtherProps}
		/>
	);
}
