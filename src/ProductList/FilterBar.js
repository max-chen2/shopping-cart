/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Row, Dropdown, Menu } from "antd";

const FilterBar = ({filterByCategory, setFilterByCategory, sortBy, setSortBy, products}) => {
  const allCategories = [...new Set(products.map(p => p.category))]
  const categoryOptions = allCategories.map(cat => {
    return (
      <Menu.Item>
          <a target="_blank" onClick={() => {setFilterByCategory(cat)}}>
          {cat}
          </a>
        </Menu.Item>
    )
  })
    const sortByOptions = (
      <Menu>
        <Menu.Item>
          <a target="_blank" onClick={() => {setSortBy('Default')}}>
            Default
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" onClick={() => {setSortBy('PriceDesc')}}>
            Price(high to low)
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" onClick={() => {setSortBy('PriceAsc')}}>
            Price(low to high)
          </a>
        </Menu.Item>
      </Menu>
    );
  
    const filterCategory = (
      <Menu>
        <Menu.Item>
          <a target="_blank" onClick={() => {setFilterByCategory('All')}}>
            All
          </a>
        </Menu.Item>
        {categoryOptions}
      </Menu>
    );
  
    return (
      <Row>
        <Col span={3}>
          <Dropdown overlay={filterCategory}>
            <a>Filter by: {filterByCategory}</a>
          </Dropdown>
        </Col>
        <Col span={3}>
          <Dropdown overlay={sortByOptions}>
            <a>Sort by: {sortBy}</a>
          </Dropdown>
        </Col>
      </Row>
    )
  }

  export default FilterBar;