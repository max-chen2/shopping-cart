import { Divider, Carousel, Image, Row, Col, Descriptions } from 'antd'

const contentStyle = {
  // height: '600px',
  // color: '#fff',
  // lineHeight: '160px',
  // textAlign: 'center',
  // background: '#364d79',
};

export const Home = () => (
  <>
    <Divider>Shop images</Divider>
    <Row justify="center">
      <Col>
        <Carousel autoplay style={{ width: '800px' }}>
          <div>
            <Image style={contentStyle} src="https://thumbs.dreamstime.com/b/supermarket-aisle-empty-20293222.jpg">1</Image>
          </div>
          <div>
            <Image style={contentStyle} src="https://thumbs.dreamstime.com/b/supermarket-aisle-empty-20293222.jpg">1</Image>
          </div>
          <div>
            <Image style={contentStyle} src="https://thumbs.dreamstime.com/b/supermarket-aisle-empty-20293222.jpg">1</Image>
          </div>
          <div>
            <Image style={contentStyle} src="https://thumbs.dreamstime.com/b/supermarket-aisle-empty-20293222.jpg">1</Image>
          </div>
        </Carousel>
      </Col>
    </Row>
    <Descriptions title="Opening hours" layout="vertical" bordered>
      <Descriptions.Item label="Monday" labelStyle={{fontWeight: 'bold'}}>0900-1700</Descriptions.Item>
      <Descriptions.Item label="Tuesday" labelStyle={{fontWeight: 'bold'}}>0900-1700</Descriptions.Item>
      <Descriptions.Item label="Wednesday" labelStyle={{fontWeight: 'bold'}}>0900-1700</Descriptions.Item>
      <Descriptions.Item label="Thursday" labelStyle={{fontWeight: 'bold'}}>0900-1700</Descriptions.Item>
      <Descriptions.Item label="Friday" labelStyle={{fontWeight: 'bold'}}>0900-1700</Descriptions.Item>
      <Descriptions.Item label="Saturday" labelStyle={{fontWeight: 'bold'}}>0900-1700</Descriptions.Item>
      <Descriptions.Item label="Sunday" labelStyle={{fontWeight: 'bold'}}>0900-1700</Descriptions.Item>
    </Descriptions>
    <Divider>More information</Divider>
    <Descriptions title="Shopping online" bordered>
      <Descriptions.Item label="Text 1" labelStyle={{fontWeight: 'bold'}}>text 1</Descriptions.Item>
      <Descriptions.Item label="Text 2" labelStyle={{fontWeight: 'bold'}}>text 2</Descriptions.Item>
    </Descriptions>
  </>
)