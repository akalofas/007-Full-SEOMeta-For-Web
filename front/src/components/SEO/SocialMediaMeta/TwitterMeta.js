import { useEffect } from "react";
import PropTypes from "prop-types";

TwitterMeta.propTypes = {
    cardType: PropTypes.string.isRequired,
    siteAccount: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    creatorAccount: PropTypes.string,
    playerFrame: PropTypes.string,
    playerWidth: PropTypes.number,
    playerHeight: PropTypes.number,
    appName: PropTypes.string,
    appId: PropTypes.string,
};

function TwitterMeta({ 
    cardType,
    siteAccount,
    title,
    description,
    image,
    url,
    creatorAccount,
    playerFrame,
    playerWidth,
    playerHeight,
    appName,
    appId
 }) {
  useEffect(() => {
    // Function to create or update a meta tag
    const createOrUpdateMeta = (name, content) => {
      let element = document.querySelector(`meta[name='${name}']`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content.toString());
      return element; // Return the element for cleanup
    };

    const twitterElements = []; // Array to keep track of created elements for cleanup
    twitterElements.push(createOrUpdateMeta("twitter:card", cardType));
    if (siteAccount) twitterElements.push(createOrUpdateMeta("twitter:site", siteAccount));
    twitterElements.push(createOrUpdateMeta("twitter:title", title));
    twitterElements.push(createOrUpdateMeta("twitter:description", description));
    twitterElements.push(createOrUpdateMeta("twitter:image", image));
    twitterElements.push(createOrUpdateMeta("twitter:url", url));
    if (creatorAccount) twitterElements.push(createOrUpdateMeta("twitter:creator", creatorAccount));
    if (playerFrame) twitterElements.push(createOrUpdateMeta("twitter:player", playerFrame));
    if (playerWidth) twitterElements.push(createOrUpdateMeta("twitter:player:width", playerWidth.toString()));
    if (playerHeight) twitterElements.push(createOrUpdateMeta("twitter:player:height", playerHeight.toString()));
    if (appName) twitterElements.push(createOrUpdateMeta("twitter:app:name:iphone", appName));
    if (appId) twitterElements.push(createOrUpdateMeta("twitter:app:id:iphone", appId));


  }, [    
    cardType,
    siteAccount,
    title,
    description,
    image,
    url,
    creatorAccount,
    playerFrame,
    playerWidth,
    playerHeight,
    appName,
    appId
]);

  return null;
}

export default TwitterMeta;
