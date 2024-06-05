import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import AlternateLink from '../SEO/AlternateLink/AlternateLink';

const ProductPage = () => {
  const { productId } = useParams();

  const baseUrl = "https://yourwebsite.com";
  const productUrl = `${baseUrl}/product/${productId}`;
  const urlEncoded = encodeURIComponent(productUrl);

  return (
    <>
      <ProductCard productId={productId} />
      <AlternateLink 
        jsonUrl={`${baseUrl}/oembed/1.0/embed?url=${urlEncoded}`}
        xmlUrl={`${baseUrl}/oembed/1.0/embed?url=${urlEncoded}&format=xml`}
      />
    </>
  );
};

export default ProductPage;
