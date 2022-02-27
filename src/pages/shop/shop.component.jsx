import React from "react"
import shop_data from "./shop.data.js"
import CollectionsPreview from "../../components/collections-preview/collections-preview.component.jsx"

class ShopPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: shop_data,
    }
  }
  render() {
    const { collections } = this.state
    return (
      <div className='ShopPage'>
        { collections.map((item) => (
          <CollectionsPreview key={item.id} />
        ))}
      </div>
    )
  }
}

export default ShopPage
