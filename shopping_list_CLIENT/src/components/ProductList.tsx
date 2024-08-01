import React from 'react';
import { useSelector } from 'react-redux';
import { Card, List} from 'antd';

const ProductList: React.FC = () => {
    const products = useSelector((state: any) => state.basket.products);

  // Group products by category
  let productsByCategory: { [key: string]: any[] } = {};

  if (products) {
    productsByCategory = products.reduce((acc:any, product:any) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {});
  }

  return (
    <div>
      { products.length!==0?  <p style={{textAlign:'center'}}>These products must be collected in the appropriate departments</p>:''}
      <div style={{display:'flex' , justifyContent: 'center',padding:'4%'}}>
        {Object.keys(productsByCategory).map(category => (
            
          <div key={category} style={{paddingRight:'1%'}}>
              <Card title={category} style={{width:200}}>
              {productsByCategory[category].map((product,key) => (
                  <List.Item key={key}>{`${product.name} (${product.quantity})`}</List.Item>
                ))}
              </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
