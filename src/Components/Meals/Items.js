import React from 'react';
import './Items.css'
const Items = [
  {
    id: '1',
    name: 'shoes',
    description:'lightweight',
    price: '$ 20.11'
  },
  {
    id: '2',
    name: 'bottle',
    description:'durability',
    price: '$ 25'
  },
  {
    id: '3',
    name: 'phones',
    description:'latest',
    price: '$ 40'
  },
]

const AvailableItems = () => {
  const itemsList = Items.map((item) => (
    <li key={item.id}>
      <div className="meal-info">
        <span className="meal-name">{item.name}</span>
        <br />
        <span className="meal-description">{item.description}</span><br/>
        <span className='meal-price'>{item.price}</span>
      </div>
      <div className="amount-container">
        {/* <label>Amount</label>
        <input size={1} maxLength={3} />
        <button className="add">+ Add</button> */}
      </div>
    </li>
  ));

  return (
    <section className="item">
      <div>
        <ul className="list">{itemsList}</ul>
      </div>
    </section>
  );
};

export default AvailableItems;
