import React, { useState, useEffect } from 'react';
import { traerProducto } from '../../../assets/productos/productos';
import ItemDetails from '../ItemDetails/ItemDetails';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        traerProducto()
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    
    return <ItemDetails product={product} />;
};

export default ItemDetailContainer