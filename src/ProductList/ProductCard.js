
import { Card, Col, Tag, Image, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Meta } = Card;
export const ProductCard = ({product, addCartItem}) => {
    const { productName, price, category, imageUrl, languages } = product;
    const translatedProductName = languages && languages['cn'] ? languages['cn'] : productName

    return (
      <Col span={4} xs={6}>
        <Card
          style={{ width: 300 }}
          cover={<Image src={imageUrl}></Image>}
          actions={[
            <Button  onClick={() => addCartItem(product)}>
              Add to cart
              <ShoppingCartOutlined key="add" label="Add to cart" />
           </Button>
          ]}
        >
          <Tag>{category}</Tag>
          <Meta title={translatedProductName} description={`$${price}`} />
        </Card>
      </Col>
    );
  };