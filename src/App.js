import { Layout, Menu, Select } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList/ProductList";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import products from "./products";
import { CheckoutModal } from "./Checkout/CheckoutModal";
import { Home } from './Home/Home'
import { About } from './Home/About'
import { Services } from './Home/Services'
import { createBrowserHistory } from 'history'

const { Header, Content, Footer } = Layout;
const { Option } = Select;

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("language"));

  const addCartItem = (product) => {
    console.log("cartItems", [...cartItems, { ...product, id: uuid() }]);
    setCartItems([...cartItems, { ...product, id: uuid() }]);
  };

  const removeCartItem = (id) => {
    setCartItems(cartItems.filter((i) => i.id !== id));
  };

  const history = createBrowserHistory()

  return (
    <Layout>
      <BrowserRouter history={history}>
        <Header className="header">
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1"><Link to="">
            <img height="40px" width="40px" src={process.env.PUBLIC_URL + '/logo.jpeg'} />
              </Link></Menu.Item>
            <Menu.Item key="2"><Link to="">Home</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/shop">Products</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/services">Services</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/about">About</Link></Menu.Item>
            <Menu.Item key="4" disabled>
              <Select defaultValue="en" style={{ width: 120 }} onChange={null}>
                <Option value="en">English</Option>
                <Option value="cn">中文</Option>
              </Select>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 30px" }}>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Routes>
              <Route path="/shop" element={<ProductList addCartItem={addCartItem} setShowCheckout={setShowCheckout} removeCartItem={removeCartItem} cartItems={cartItems} products={products} />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="*" element={<Home />}></Route>
            </Routes>

            <CheckoutModal
              showCheckout={showCheckout}
              setShowCheckout={setShowCheckout}
              cartItems={cartItems}
            />
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>@Max 2021 - Prototype shopping cart application</Footer>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
