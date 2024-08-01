
import React, { useState ,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Select, Button, Input,message } from "antd";
import { addProduct } from '../REDUX/actions';
import UtilsService from '../UtilsService/UtilsService';
import {Product}from '../Input/Product'

const AddProduct: React.FC = () => {

    const utilsService = new UtilsService();

    const dispatch = useDispatch();
    const [product, setProduct] = useState(null)
    const [category, setCategory] = useState(null)
    const [options, setOptions] = useState()

    const newProduct: Product = {
        name: 'Product Name',
        category: 'Product Category',
        quantity: 1,
    };

    useEffect( () => {
        utilsService.getCategories("http://localhost:5000/api/categories/get")
            .then(data => {
                const create_options_by_data = data.map((item:any) => ({
                    value: item.name,
                    lable:item.name 
                }));
            setOptions(create_options_by_data)
        })              
    }, [])
        
    const onChangeCategory = (value: string) => {
        setCategory(value)
    };

    const handleAddProduct = () => {
        if(!product || !category){
            message.info('Please fill product or category');
        }else
            dispatch(addProduct({ name: product.toUpperCase(), category: category, quantity: 1 }));
    };

    return (
        <div>
            <div style={{ margin: '0px 0 60px',paddingLeft:'30%' }}>
                <Select
                    showSearch
                    placeholder="Select a category"
                    optionFilterProp="label"
                    onChange={onChangeCategory}
                    options={options}
                    style={{ width: 200 }}
                />
                <Input name='productName' placeholder='name of product' style={{ width: 200 }} onChange={(e) => setProduct(e.target.value)}></Input>
                <Button onClick={handleAddProduct} style={{ width: 200 }}>Add Product</Button>
            </div>
        </div>
    );
};

export default AddProduct;
