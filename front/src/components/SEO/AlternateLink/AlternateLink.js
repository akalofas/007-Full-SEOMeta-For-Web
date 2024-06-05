import { useEffect } from "react";
import PropTypes from "prop-types";

AlternateLink.propTypes = {
  jsonUrl: PropTypes.string.isRequired,
  xmlUrl: PropTypes.string.isRequired,
};

const AlternateLink = ({ jsonUrl, xmlUrl }) => {
  useEffect(() => {
    let jsonAlternate = document.getElementById("jsonAlternate");
    let xmlAlternate = document.getElementById("xmlAlternate");

    if (!jsonAlternate) {
      jsonAlternate = document.createElement("link");
      jsonAlternate.id = "jsonAlternate";
      jsonAlternate.rel = "alternate";
      jsonAlternate.type = "application/json+oembed";
      document.head.appendChild(jsonAlternate);
    }

    jsonAlternate.href = jsonUrl;

    if (!xmlAlternate) {
      xmlAlternate = document.createElement("link");
      xmlAlternate.id = "xmlAlternate";
      xmlAlternate.rel = "alternate";
      xmlAlternate.type = "text/xml+oembed";
      document.head.appendChild(xmlAlternate);
    }

    xmlAlternate.href = xmlUrl;
  }, [jsonUrl, xmlUrl]);
  return null;
};

export default AlternateLink;
