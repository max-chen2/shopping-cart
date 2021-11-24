import { List, Avatar, Button } from "antd";
const Cart = ({ items, removeItem, setShowCheckout }) => {
  return (
    <>
      <div style={{ padding: 15 }}>
        <b>Shopping Cart</b>
        <List
          style={{ marginTop: 10 }}
          itemLayout="horizontal"
          dataSource={items}
          renderItem={(item) => {
            const { productName, price, imageUrl, id } = item;
            
            return (
              <List.Item actions={[<Button onClick={() => removeItem(id)}>delete</Button>]}>
                <List.Item.Meta
                  avatar={<Avatar src={imageUrl} />}
                  title={productName}
                  description={`$${price}`}
                />
              </List.Item>
            );
          }}
        />
        Total: ${items.reduce((acc, i) => acc + i.price, 0).toFixed(2)}
        <br />
        <Button type="primary" onClick={() => {setShowCheckout(true)}}>Checkout</Button>
      </div>
    </>
  );
};

export default Cart;
