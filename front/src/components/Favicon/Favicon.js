import { useEffect } from "react";
import PropTypes from "prop-types";

const iconsConfig = [
  {
    id: "faviconico",
    defaultHref: "http://localhost:5173/public/NEW_Favicon.ico",
    rel: "shortcut icon",
  },
  {
    id: "favicon",
    defaultHref: "http://localhost:5173/public/NEW_Favicon.png",
    rel: "icon",
  },
  {
    id: "faviconapple",
    defaultHref: "http://localhost:5173/public/NEW_Faviconapple.png",
    rel: "apple-touch-icon",
  },
  {
    id: "favicon16",
    sizes: "16x16",
    defaultHref: "http://localhost:5173/public/NEW_Favicon16.png",
  },
  {
    id: "favicon32",
    sizes: "32x32",
    defaultHref: "http://localhost:5173/public/NEW_Favicon32.png",
  },
  {
    id: "favicon48",
    sizes: "48x48",
    defaultHref: "http://localhost:5173/public/NEW_Favicon48.png",
  },
  {
    id: "favicon72",
    sizes: "72x72",
    defaultHref: "http://localhost:5173/public/NEW_Favicon72.png",
    rel: "apple-touch-icon",
  },
  {
    id: "favicon120",
    sizes: "120x120",
    defaultHref: "http://localhost:5173/public/NEW_Favicon120.png",
    rel: "apple-touch-icon",
  },
  {
    id: "favicon144",
    defaultHref: "http://localhost:5173/public/NEW_Favicon144.png",
    meta: true,
  },
  {
    id: "favicon152",
    sizes: "152x152",
    defaultHref: "http://localhost:5173/public/NEW_Favicon152.png",
    rel: "apple-touch-icon",
  },
  {
    id: "favicon180",
    sizes: "180x180",
    defaultHref: "http://localhost:5173/public/NEW_Favicon180.png",
    rel: "apple-touch-icon",
  },
  {
    id: "favicon192",
    sizes: "192x192",
    defaultHref: "http://localhost:5173/public/NEW_Favicon192.png",
  },
  {
    id: "favicon512",
    sizes: "512x512",
    defaultHref: "http://localhost:5173/public/NEW_Favicon512.png",
  },
];

Favicon.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      href: PropTypes.string,
      type: PropTypes.string,
    })
  ).isRequired,
};

function Favicon({ icons }) {
  useEffect(() => {
    iconsConfig.forEach((iconConfig) => {
      let element = document.getElementById(iconConfig.id);
      const { href, type } =
        icons.find((icon) => icon.id === iconConfig.id) || {};

      if (!element) {
        if (iconConfig.meta) {
          element = document.createElement("meta");
          element.name = "msapplication-TileImage";
        } else {
          element = document.createElement("link");
          element.rel = iconConfig.rel || "icon";
          if (iconConfig.sizes) element.sizes = iconConfig.sizes;
        }
        element.id = iconConfig.id;
        document.head.appendChild(element);
      }

      if (iconConfig.meta) {
        element.setAttribute('content', href || iconConfig.defaultHref);
      } else {
        element.href = href || iconConfig.defaultHref;
        if (type) {
          element.type = type;
        }
      }
    });
  }, [icons]);

  return null;
}

export default Favicon;
