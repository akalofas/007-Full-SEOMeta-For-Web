import { useEffect } from "react";
import PropTypes from "prop-types";

OriginalMeta.propTypes = {
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number,
  currency: PropTypes.string,
};

function OriginalMeta({ type, url, title, description, image, price, currency }) {
  useEffect(() => {
    // Function to create or update a meta tag
    const createOrUpdateMeta = (property, content) => {
      let element = document.querySelector(`meta[property='${property}']`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
      return element;  // Return the element for cleanup
    };

    const metaElements = [];  // Array to keep track of created elements for cleanup
    metaElements.push(createOrUpdateMeta("og:type", type));
    metaElements.push(createOrUpdateMeta("og:url", url));
    metaElements.push(createOrUpdateMeta("og:title", title));
    metaElements.push(createOrUpdateMeta("og:description", description));
    metaElements.push(createOrUpdateMeta("og:image", image));

    if (type === "product" && price !== undefined && currency) {
      metaElements.push(createOrUpdateMeta("product:price:amount", price.toString()));
      metaElements.push(createOrUpdateMeta("product:price:currency", currency));
    }

  }, [type, url, title, description, image, price, currency]);

  return null;
}

export default OriginalMeta;
