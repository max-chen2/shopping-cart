/* eslint-disable jsx-a11y/anchor-is-valid */
import { Row, Layout } from "antd";
import { useState } from 'react';
import FilterBar from './FilterBar'
import { ProductCard } from "./ProductCard";
import Cart from '../Cart';

const { Sider, Content } = Layout

const ProductList = ({ addCartItem, products, cartItems, removeCartItem, setShowCheckout }) => {
  const [filterByCategory, setFilterByCategory] = useState('All')
  const [sortBy, setSortBy] = useState('Default')

  const filteredProducts = products.filter(product => {
    return filterByCategory === 'All' || product.category === filterByCategory
  })


  let sortedProducts = filteredProducts
  if (sortBy === 'PriceAsc') {
    sortedProducts = sortedProducts.sort((a, b) => {
      return a.price < b.price ? -1 : 1
    })
  }
  else if (sortBy === 'PriceDesc') {
    sortedProducts = sortedProducts.sort((a, b) => {
      return a.price < b.price ? 1 : -1
    })
  }

  return (
    <>
      <Content style={{ padding: "0 24px", minHeight: 280 }}>
        <FilterBar filterByCategory={filterByCategory} setFilterByCategory={setFilterByCategory} sortBy={sortBy} setSortBy={setSortBy} products={products} />
        <Row>
          {sortedProducts.map((p) => (
            <ProductCard product={p} addCartItem={addCartItem} />
          ))}
        </Row>
      </Content>

      <Sider width={300} theme="light">
        <Cart
          items={cartItems}
          removeItem={removeCartItem}
          setShowCheckout={setShowCheckout}
        />
      </Sider>
    </>
  );
};

export default ProductList;
