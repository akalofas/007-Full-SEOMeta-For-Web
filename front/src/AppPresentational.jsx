import PropTypes from 'prop-types';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

{/* -- Favicon, Main Page Title imports -- */}
import Favicon from './components/Favicon/Favicon';
import PageTitle from './components/SEO/PageTitle/PageTitle';

{/* -- Basic SEO Settings -- */}
import BasicSeoSettings from './components/SEO/BasicSeoSettings/BasicSeoSettings';

{/* -- Original and Twitter Meta -- */}
import OriginalMeta from './components/SEO/SocialMediaMeta/OriginalMeta';
import TwitterMeta from './components/SEO/SocialMediaMeta/TwitterMeta';

{/* -- Google Analytics and TagManager -- */}
import GoogleAnalytics from './components/GoogleAnalytics/GoogleAnalytics';
import GoogleTagManager from './components/GoogleTagManager/GoogleTagManager';

{/* -- Dynamic CSS and components css style -- */}
import StyleVariables from './components/StyleVariables/StyleVariables';
import './App.css';

{/* -- App Components -- */}
import TopBarContainer from './pages/TopBar/TopBarContainer';
import HeaderContainer from './pages/Header/HeaderContainer';
import HomeContainer from './pages/Home/HomeContainer';
import FooterContainer from './pages/Footer/FooterContainer';

AppPresentational.propTypes = {
	appLogic: PropTypes.shape({
		changeLanguage: PropTypes.func.isRequired,
		count: PropTypes.number.isRequired,
		setCount: PropTypes.func.isRequired,
		t: PropTypes.func.isRequired,
	}).isRequired,
	seoAndOther: PropTypes.shape({
		faviconConfig: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				href: PropTypes.string.isRequired,
				type: PropTypes.string,
			})
		).isRequired,
		pageTitle: PropTypes.string.isRequired,
		seoSettings: PropTypes.object.isRequired,
		originalMeta: PropTypes.object.isRequired,
		twitterMeta: PropTypes.object.isRequired,
		gaTrackingId: PropTypes.string.isRequired,
		gtmId: PropTypes.string.isRequired,
	}).isRequired,
};

export default function AppPresentational({ appLogic, seoAndOther }) {
	return (
		<>
			{/* -- Favicon, Main Page Title -- */}
			<Favicon icons={seoAndOther.faviconConfig} />
			<PageTitle pageTitle={seoAndOther.pageTitle} />

			{/* -- Basic SEO Settings -- */}
			<BasicSeoSettings {...seoAndOther.seoSettings} />

			{/* -- Original and Twitter Meta -- */}
			<OriginalMeta {...seoAndOther.originalMeta} />
			<TwitterMeta {...seoAndOther.twitterMeta} />

			{/* -- Google Analytics and TagManager -- */}
			<GoogleAnalytics gaTrackingId={seoAndOther.gaTrackingId} />
			<GoogleTagManager gtmId={seoAndOther.gtmId} />

			{/* -- Dynamic CSS -- */}
			<StyleVariables />

			{/* -- App Components -- */}
			<TopBarContainer />
			<HeaderContainer />
			<HomeContainer />
			<FooterContainer />
		</>
	);
}
