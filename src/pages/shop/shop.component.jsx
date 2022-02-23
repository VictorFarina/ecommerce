import React from "react"
import shop_data from "./shop.data.js"

class ShopPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: shop_data,
    }
  }

  render() {
    return <div> shop_data </div>
  }
}

export default ShopPage
