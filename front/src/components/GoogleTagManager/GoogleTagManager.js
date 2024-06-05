import { useEffect } from "react";
import PropTypes from "prop-types";

GoogleTagManager.propTypes = {
  gtmId: PropTypes.string.isRequired,
};

function GoogleTagManager({ gtmId }) {
  useEffect(() => {
    let tagElement = document.getElementById("googleTagManager")
    if (!tagElement) {
      tagElement = document.createElement("script")
      tagElement.id = "googleTagManager"
    }

    tagElement.textContent = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `
  })
  return null;
}

export default GoogleTagManager;
