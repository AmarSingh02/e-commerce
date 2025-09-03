import React, { useState } from 'react';

import ProductCard from '../../components/productCard';
import { AllProduct } from '../../constant/productData';
import SearchBar from '../../components/searchBar';

const Product = () => {
  const [products, setProducts] = useState(AllProduct);

  const handleSearch = (term) => {
    if (!term.trim()) {
     
      setProducts(AllProduct);
    } else {
      const filteredProduct = AllProduct.filter((item) =>
        item.product_name.toLowerCase().includes(term.toLowerCase())
      );
      console.log(filteredProduct)
      setProducts(filteredProduct);
    }
  };

  return (
    <>
      <div className="w-70 mb-4">
        <SearchBar onSearch={handleSearch} delay={300} />
      </div>

      <div className="flex flex-wrap gap-6 p-4 cursor-pointer">
        {products.length > 0 ? (
          products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
    </>
  );
};

export default Product;
