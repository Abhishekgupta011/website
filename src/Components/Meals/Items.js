import React from 'react';
import './Items.css'
import { Card } from '@mui/material';
import MealItem from './MealItem';
const Items = [
  {
    id: '1',
    name: 'shoes',
    description:'lightweight',
    price: '$20.11'
  },
  {
    id: '2',
    name: 'bottle',
    description:'durability',
    price: '$25'
  },
  {
    id: '3',
    name: 'phones',
    description:'latest',
    price: '$40.444'
  },
]

const AvailableItems = () => {
  const itemsList = Items.map((item) => (
    <MealItem
      key = {item.id}
      name = {item.name}
      description = {item.description}
      price = {item.price}
    />
  ));

  return (
    <section className="item">
      <Card>
        <ul className="list">{itemsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableItems;
