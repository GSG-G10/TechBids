import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BidsStatusCheckBox from '../../Components/BidsStatusCheckBox';
import BidsDetailsPriceBar from '../../Components/BidsDetailsPriceBar';
import BidsCategoriesSelect from '../../Components/BidsCategoriesSelect';
import './style.css';

const Bids : React.FC = () => {
  const [price, setPrice] = useState<number[]>([0, 10000]);
  const [categoryId, setCategoryId] = useState();
  const [status, setStatus] = useState('all');

  const location = useLocation();
  const query = new URLSearchParams(location.search);

  console.log(categoryId, query);

  return (
    <div className="bids-container">
      <div className="filters-container">
        <BidsCategoriesSelect setCategoryId={setCategoryId} />
        <BidsDetailsPriceBar price={price} setPrice={setPrice} />
        <BidsStatusCheckBox status={status} setStatus={setStatus} />
      </div>
    </div>
  );
};

export default Bids;
