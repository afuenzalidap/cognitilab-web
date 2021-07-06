import { createContext, useEffect, useState } from 'react';
import { Producto, Carrito } from '../interfaces/appInterfaces';
import { db } from '../api/config_firebase';
import { disconnect } from 'process';

type ProductosContextProps = {
    products: Producto[];
    loadProducts: () => Promise<void>;
    loadProductsAsync: () => Promise<void>;
    carrito: Carrito[];
    setCarrito: React.Dispatch<React.SetStateAction<Carrito[]>>
}

export const ProductosContext = createContext({} as ProductosContextProps);

export const ProductosProvider = ({ children }: any) => {
    const [products, setProducts] = useState<Producto[]>([]);
    const [carrito, setCarrito] = useState<Carrito[]>([]);

    const loadProducts = async () => {
        db.collection('productos').onSnapshot((querySnapshot) => {
            const docs: Producto[] = [];
            querySnapshot.forEach((doc) => {
                docs.push({
                    id: doc.id,
                    Producto: doc.data().Producto,
                    Descripcion: doc.data().Descripcion,
                    Precio: doc.data().Precio,
                    Foto: doc.data().Foto,
                    Disponible: doc.data().Disponible,
                    Categoria: doc.data().Categoria
                });
            });

            setProducts( docs );
        });
    }

    const loadProductsAsync = async () => {

        const prod = await db.collection('productos')
        .orderBy('Producto', 'asc')
        .get();

        const d = prod.docs.map( (doc) => {
            return {
                id: doc.id,
                Producto: doc.data().Producto,
                Descripcion: doc.data().Descripcion,
                Precio: doc.data().Precio,
                Foto: doc.data().Foto,
                Disponible: doc.data().Disponible,
                Categoria: doc.data().Categoria
            }
        });

        setProducts(d);
    }

    return (
        <ProductosContext.Provider value = {{
            products,
            loadProducts,
            loadProductsAsync,
            carrito,
            setCarrito
        }}>
            { children }
        </ProductosContext.Provider>
    )
}