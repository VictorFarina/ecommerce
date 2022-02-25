import React from 'react';

import './products-preview.styles.scss'

const ProductsPreview = ({ title, items }) => (
    <div className='product-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'></div>

        {
            items.map((item)=> (
                <div key={item.id}>{item.name}</div>
            ))
        }

    </div>
);


export default ProductsPreview;