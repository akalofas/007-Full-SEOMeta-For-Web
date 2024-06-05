import { useEffect } from "react";
import PropTypes from "prop-types";

GoogleAnalytics.propTypes = {
  gaTrackingId: PropTypes.string.isRequired,
};

function GoogleAnalytics({ gaTrackingId }) {
  useEffect(() => {
    let gleAnalyticsElement = document.getElementById("googleAnalytics");
    let gleAnalyticsScriptElement = document.getElementById(
      "googleAnalyticsScript"
    );

    if (!gleAnalyticsElement) {
      gleAnalyticsElement = document.createElement("script");
      gleAnalyticsElement.id = "googleAnalytics";
      gleAnalyticsElement.async = true; 
      document.head.appendChild(gleAnalyticsElement);
    }

    if (!gleAnalyticsScriptElement) {
      gleAnalyticsScriptElement = document.createElement("script");
      gleAnalyticsScriptElement.id = "googleAnalyticsScript";
      document.head.appendChild(gleAnalyticsScriptElement);
    }

    gleAnalyticsElement.setAttribute(
      "src",
      `https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`
    );
    gleAnalyticsScriptElement.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaTrackingId}');
  `;
  }, [gaTrackingId]);
  return null;
}

export default GoogleAnalytics;
