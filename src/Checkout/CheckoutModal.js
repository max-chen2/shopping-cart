import { Modal, List, Avatar, Form, Input, Result, Button } from "antd";
import { useState } from "react";

export const CheckoutModal = ({ showCheckout, setShowCheckout, cartItems }) => {
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  if (isCheckedOut) {
    return (
      <Modal title="Success" visible={showCheckout} closable={false} footer={null}>
        <Result
          status="success"
          title="Order placed"
          subTitle="Order number: 2017182818828182881"
          extra={[
            <Button type="primary" key="console" onClick={() => {
                setShowCheckout(false)
                setIsCheckedOut(false)
                }}>
              Buy Again
            </Button>
          ]}
        />
      </Modal>
    );
  }
  return (
    <Modal
      title="Checkout"
      visible={showCheckout}
      onOk={() => setIsCheckedOut(true)}
      onCancel={() => setShowCheckout(false)}
      okText="Place order"
      cancelText="Cancel"
    >
      <List
        style={{ marginTop: 10 }}
        itemLayout="horizontal"
        dataSource={cartItems}
        renderItem={(item) => {
          const { productName, price, imageUrl } = item;

          return (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={imageUrl} />}
                title={productName}
                description={`$${price}`}
              />
            </List.Item>
          );
        }}
      />

      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={null}
        onFinishFailed={null}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone number"
          name="phone"
          rules={[{ required: true, message: "Please input your phone!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Note" name="note">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
