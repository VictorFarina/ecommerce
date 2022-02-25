import React from "react"
import shop_data from "./shop.data.js"
import ProductsPreview from "../../components/products-preview-component/products-preview.component.jsx.jsx"

class ShopPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: shop_data,
    }
  }

  render() {
    return <ProductsPreview />  
  }
}

export default ShopPage
