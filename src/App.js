import { Layout, Menu, Breadcrumb, Select } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList/ProductList";
import { useState } from "react";
import Cart from "./Cart";
import { v4 as uuid } from "uuid";
import products from "./products";
import { CheckoutModal } from "./Checkout/CheckoutModal";
import { Home } from './Home/Home'
import { createBrowserHistory } from 'history'

const { Header, Content, Footer, Sider } = Layout;
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
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1"><Link to="">LOGO</Link></Menu.Item>
            <Menu.Item key="2"><Link to="">Home</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/shop">Products</Link></Menu.Item>
            <Menu.Item key="4" disabled>
              <Select defaultValue="en" style={{ width: 120 }} onChange={null}>
                <Option value="en">English</Option>
                <Option value="cn">中文</Option>
              </Select>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 30px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item><Link to="">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>Shop</Breadcrumb.Item>
          </Breadcrumb> */}
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/shop" element={<ProductList addCartItem={addCartItem} setShowCheckout={setShowCheckout} removeCartItem={removeCartItem} cartItems={cartItems} products={products} />}></Route>
            </Routes>

            <CheckoutModal
              showCheckout={showCheckout}
              setShowCheckout={setShowCheckout}
              cartItems={cartItems}
            />
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>Footer</Footer>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
