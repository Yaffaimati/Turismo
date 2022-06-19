
import React, { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList"
import customFetch from "../../../assets/productos/customFech"
import {traerProductos} from "../../../assets/productos/productos"





const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        traerProductos()
            .then((res) => {
                setProductos(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    
    return (
        <div>
            <h2>{saludo}</h2>
            <ItemList items={productos} />
        </div>
    );
};

export default ItemListContainer;