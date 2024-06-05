import { useEffect } from "react";
import PropTypes from "prop-types";

PageTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

function PageTitle({ pageTitle }) {
  useEffect(() => {
    let titleElement = document.getElementsByTagName("title")[0];

    if (!titleElement) {
      titleElement = document.createElement("title");
      document.head.appendChild(titleElement);
    }

    titleElement.textContent = pageTitle;

    let appleTittleElement = document.getElementById("apple-web-app-tittle");

    if (!appleTittleElement) {
      appleTittleElement = document.createElement("apple-mobile-web-app-title");
      appleTittleElement.setAttribute('content', pageTitle);
    }

    appleTittleElement.setAttribute('content', pageTitle);

  }, [pageTitle]);
  return null;
}

export default PageTitle;
