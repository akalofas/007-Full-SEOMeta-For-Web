import { useEffect } from "react";
import PropTypes from "prop-types";

BasicSeoSettings.propTypes = {
	description: PropTypes.string.isRequired,
	keywords: PropTypes.string.isRequired,
	canonicalUrl: PropTypes.string.isRequired,
	robots: PropTypes.string,
};

function BasicSeoSettings({ description, keywords, canonicalUrl, robots }) {
	useEffect(() => {
		// Function to create or update meta/link tags
		const createOrUpdate = (tag, nameOrRel, contentOrHref) => {
			let element;
			if (tag === 'meta') {
				element = document.querySelector(`meta[name="${nameOrRel}"]`);
			} else if (tag === 'link') {
				element = document.querySelector(`link[rel="${nameOrRel}"]`);
			}

			if (!element) {
				if (tag === 'meta') {
					element = document.createElement('meta');
					element.name = nameOrRel;
					document.head.appendChild(element);
				} else if (tag === 'link') {
					element = document.createElement('link');
					element.rel = nameOrRel;
					document.head.appendChild(element);
				}
			}

			if (tag === 'meta') {
				element.setAttribute('content', contentOrHref);
			} else if (tag === 'link') {
				element.href = contentOrHref;
			}
			// Return the element for cleanup if no meta or link then null;
			return element || null;
		};

		const metaElements = []; // Cleanup array
		metaElements.push(createOrUpdate('meta', 'description', description));
		metaElements.push(createOrUpdate('meta', 'keywords', keywords));
		metaElements.push(createOrUpdate('link', 'canonical', canonicalUrl));
		metaElements.push(createOrUpdate('meta', 'robots', robots));

	}, [description, keywords, canonicalUrl, robots]);
	return null;
}

export default BasicSeoSettings;
