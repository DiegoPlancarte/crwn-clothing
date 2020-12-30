import React from 'react';
import './collectionitem.styles.scss'

import CustomButton from '../custom-button/CustomButton.component'

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className='collection-item'>
      <div 
        className='image'
        style={{ backgroundImage: `url(${imageUrl})`}}
      />
      <div className='collection-footer'>
        <span className='name' >{ name }</span>
        <span className='price' >{ price }</span>
      </div>
      <CustomButton inverted>ADD TO CART</CustomButton>
    </div>
  );
};

export default CollectionItem;