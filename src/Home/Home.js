import { Divider, Carousel, Image, Row, Col, Card, Button, Modal, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { ProductCard } from '../ProductList/ProductCard'
import { useState } from 'react'
import products from "../products";

export const Home = () => {
  const [showEnquireModal, setShowEnquireModal] = useState(false);


  const EnquireModal = ({ showEnquireModal, setShowEnquireModal }) => (
    <Modal
      title="Get a shipping quote"
      visible={showEnquireModal}
      onOk={() => setShowEnquireModal(false)}
      onCancel={() => setShowEnquireModal(false)}
      okText="Enquire"
      cancelText="Cancel"
    >
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
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          label="Phone number"
          name="phone"
          rules={[{ required: true, message: "Please input your phone!" }]}
        >
          <Input placeholder="Enter your phone" />
        </Form.Item>

        <Form.Item
          label="Length"
          name="length"
        >
          <Input placeholder="Length(cm)" />
        </Form.Item>

        <Form.Item
          label="Width"
          name="width"
        >
          <Input placeholder="Width(cm)" />
        </Form.Item>

        <Form.Item
          label="Height"
          name="height"
        >
          <Input placeholder="Height(cm)" />
        </Form.Item>

        <Form.Item
          label="Weight"
          name="weight"
        >
          <Input placeholder="Weight(kg)" />
        </Form.Item>

        <Form.Item label="Comment" name="comment">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
  return (
    <>
      <img src={process.env.PUBLIC_URL + '/banner2.webp'} style={{ position: 'absolute' }}></img>

      <div style={{ position: 'relative', marginTop: '299px', marginBottom: '12px', marginRight: '150px' }}>
        <h1 style={{ fontSize: '60px', lineHeight: 'normal', textAlign: 'right', color: 'white' }}>
          <span>SAFE,<br />
            EFFICIENT,<br />
            PROFESSIONAL,
          </span>
        </h1>
      </div>
      <div style={{ position: 'relative', textAlign: 'left', marginLeft: '150px', color: 'white' }}>
        <p style={{ lineHeight: '1.4em', fontSize: '28px' }}>
          <span>Need a logistic Service? We can help.</span>
        </p>
        <p style={{ lineHeight: '1.4em', fontSize: '28px' }}>
          <span>
            <span>
              Call 403-999-9999
            </span>
          </span>
        </p>
      </div>

      <div style={{ zIndex: '1000', position: 'relative', marginLeft: 'calc((100% - 980px) * 0.5)' }} >
        <img src={process.env.PUBLIC_URL + '/middle-banner.png'}></img>
      </div>

      <div style={{ zIndex: '500', position: 'relative', marginTop: '-50px', backgroundColor: 'white' }}>
        <img src="https://static.wixstatic.com/media/d8d9e0_6545abcec818418bb4abb2c81d990bed~mv2.jpg/v1/fill/w_658,h_768,al_c,q_85,usm_0.66_1.00_0.01/d8d9e0_6545abcec818418bb4abb2c81d990bed~mv2.webp" alt="ING_33594_154729.jpg" />
        <div style={{width: '500px', float: 'right', marginTop: '150px', marginRight: '150px'}}>
          <div id="comp-jvv1hhoo" className="_2Hij5" data-testid="richTextElement">
            <h2 className="font_2">
              <span>
                <span>
                  <span style={{fontSize: '34px'}}>About Little Bee Logistic Services</span>
                </span>
              </span>
            </h2>
          </div>
          <div id="comp-jvv1inv9" className="_2Hij5" data-testid="richTextElement">
            <p className="font_8">
              <span>
                <span>
                  <span style={{fontSize: '20px'}}>
                    Little Bee is located in Edmonton, focuses on ocean freight between China and Canada. We strives to provide logistics solutions to its customers. With good price, high efficiency, and professional logistic services, we help customers ship their newly purchased goods from Canada to cities across China.
                  </span>
                </span>
              </span>
            </p>
          </div>
          <div style={{marginTop: '50px'}}>
            <Button>Learn more</Button>
          </div>
          <div data-mesh-id="comp-jvv1fyqvinlineContent-wedge-4"></div>
        </div>
      </div>
      <Row>
        <Col span="24">
          <div style={{ height: '400px', lineHeight: '100px', textAlign: 'center', background: 'rgb(255, 228, 115)', fontWeight: 'bold', fontSize: '48px' }}>
            {'Come visit our shop.'.toUpperCase()}
            <Row>
              <Col span="12" style={{ fontSize: '12px', marginRight: '0px', width: '100%' }}>
                <p>Our address: Find us at 123, ABC Street. Abc 31577 CA</p>
              </Col>
              <Col span="12">
                <iframe style={{ marginRight: '20px', display: 'flex' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.501270683217!2d-113.4888836837542!3d53.495239171248734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a018b1722368cd%3A0xbf925aa4568ac673!2s5910%2099%20St%20NW%2C%20Edmonton%2C%20AB%20T6E%203N9%2C%20Canada!5e0!3m2!1sen!2sau!4v1638009189157!5m2!1sen!2sau" width="400" height="280" allowfullscreen="" loading="lazy"></iframe>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row gutter="16">
        {/* <Col xs="12" sm="12" md="8" lg="4"> */}
        <Col span="8">
          <Link to="/shop"><ProductCard product={products[0]} addCartItem={null} /></Link>
        </Col>
        <Col span="8">
          <Link to="/shop"><ProductCard product={products[1]} addCartItem={null} /></Link>
        </Col>
        <Col span="8">
          <Link to="/shop"><ProductCard product={products[2]} addCartItem={null} /></Link>
        </Col>
      </Row>
      <Divider>Shipping Quote</Divider>
      <Row gutter={16}>
        <Col span={6}></Col>
        <Col span={6}>
          <Card title="Ocean freight" bordered={false} actions={[<Button onClick={() => { setShowEnquireModal(true) }}>Enquire now</Button>]}
            cover={<img src={process.env.PUBLIC_URL + '/shipping1.jpeg'} />}>

          </Card>
        </Col>
        <Col span={6}>
          <Card title="Air freight" bordered={false} actions={[<Button onClick={() => { setShowEnquireModal(true) }}>Enquire now</Button>]}
            cover={<img src={process.env.PUBLIC_URL + '/shipping2.jpeg'} />}>
          </Card>
        </Col>
      </Row>

      <EnquireModal showEnquireModal={showEnquireModal} setShowEnquireModal={setShowEnquireModal} />
    </>
  )
}