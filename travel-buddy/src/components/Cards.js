import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Explore the Paradise Up North.'
              label='Canada'
              path='/services'
            />
            <CardItem
              src='images/img-13.jpg'
              text='Experience a touch of the exotic in China: Land of the rising sun.'
              label='China'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-11.jpg'
              text='Live your story in the desert paradise.'
              label='Dubai'
              path='/services'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Sail across the East sea aka Sea of Japan.'
              label='Japan'
              path='/products'
            />
            <CardItem
              src='images/img-15.jpg'
              text='Study in the best universities Malaysia has to offer.'
              label='Malaysia'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;