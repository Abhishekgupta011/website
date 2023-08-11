import React from 'react';
import './Items.css'
import Card from '../UI/Card';
import MealItem from './MealItem';
const Items = [
  {
    id: '1',
    name: 'Burger Deluxe',
    description:'fresh lettuce, tomato, and special sauce.',
    price: 20.11
  },
  {
    id: '2',
    name: 'Grilled Salmon',
    description:' marinated in lemon and herbs, grilled to perfection.',
    price: 25
  },
  {
    id: '3',
    name: 'Pad Thai Noodles',
    description:'Stir-fried rice noodles with shrimp, chicken',
    price: 40.444
  },
  {
    id: '4',
    name: 'Grilled Vegetable Platter',
    description:'Zucchini, Bell peppers, Eggplant, etc.',
    price: 18
  }
]

const AvailableItems = () => {
  const itemsList = Items.map((item) => (
    <MealItem
      key = {item.id}
      id = {item.id} 
      name = {item.name}
      description = {item.description}
      price = {item.price}
    />
  ));

  return (
    
      <Card>
        <ul className="list">{itemsList}</ul>
      </Card>
    
  );
};

export default AvailableItems;
