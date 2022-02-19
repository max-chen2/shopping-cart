
import { Card, Col, Tag, Image, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Meta } = Card;
export const ProductCard = ({ product, addCartItem }) => {
  const { productName, price, category, imageUrl } = product;
  const translatedProductName = productName

  const actions = addCartItem ? [
    <Button onClick={() => addCartItem(product)}>
      Add to cart
      <ShoppingCartOutlined key="add" label="Add to cart" />
    </Button>
  ] : []

  return (
      <Card
        cover={<Image src={imageUrl}></Image>}
        actions={actions}
      >
        <Tag>{category}</Tag>
        <Meta title={translatedProductName} description={`$${price}`} />
      </Card>
  );
};