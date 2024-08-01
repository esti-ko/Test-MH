import React from 'react';
import { useSelector } from 'react-redux';

const Header: React.FC = () => {
  const products = useSelector((state: any) => state.basket.products);//RootState
  const quantity = useSelector((state: any) => state.basket.quantityAll);
  console.log('products',products)
  return (
    <div>
      <div className='header' style={{width:"100%",height:50,backgroundColor: '#9ea1a59e',textAlign:'center',padding:50,fontSize:35}}>Shopping Cart</div>
      <h2 style={{padding:'2%'}}>{quantity===0?'The cart is  empty':`Total:  ${quantity}  products`}</h2>
    </div>
  );
};

export default Header;
