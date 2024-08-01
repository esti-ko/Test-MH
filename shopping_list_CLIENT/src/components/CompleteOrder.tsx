import React, { useState ,useEffect} from 'react';
import { Card, List ,Button,message } from 'antd';
import { useSelector } from 'react-redux';
import UtilsService from '../UtilsService/UtilsService';

const CompleteOrder: React.FC = () => {

    const utilsService = new UtilsService();

    const [completed,setCompleted]=useState(false)

    const products = useSelector((state: any) => state.basket.products);
    // console.log(products)
    // const data1 = products?.map((key:any) => ({
    //     title: key.category
    // }))

    const Complete_an_order=()=>{
        console.log('products',products)
        if(products.length === 0 ){
            message.info('Please fill cart');
        }else{
        utilsService.postOrder('http://localhost:5000/api/order',products).then(response => {
            console.log('Server response:', response.data);
            setCompleted(true)
            message.success('The order is complete');
          })
        }
    }

    return (

        <>
            <Button onClick={Complete_an_order} style={{ width: 200 ,left: '44%' , margin: '5% 0 5% 0' }}>Complete an order</Button>
        </>
    )
}

export default CompleteOrder;